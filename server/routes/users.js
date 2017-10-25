var express = require('express');
var router = express.Router();
var Users = require("../models/users");

//匹配请求地址，返回数据逻辑
router.get("/", function(req, res, next) {
    res.send('respond with a resource');
  });
  //注册接口
  router.post("/register", function(req, res, next) {
      var item = {
          userName: req.body.number,
          password: req.body.password,
          cartList: [
              {
                  productId: "",
                  price: "",
                  title: "",
                  imageUrl: "",
                  productNum: "",
                  color: "",
                  size: ""
              }
          ]
      }
      Users.findOne({}, function (err, userDoc) {
        if(err) {
          res.json({
            status: "1",
            msg: err.message
          });
        }else{
            var arrDoc = userDoc.user;
            for(var i = 0; i < arrDoc.length; i++) {
                if(arrDoc[i].userName == item.userName) {
                    res.json({
                      status: "1",
                      msg: "",
                      result: ""
                  });
                  return;
                }
            }
            arrDoc.push(item);
            console.log(userDoc.user);
            userDoc.save(function (err, doc) {
                if(err) {
                  res.json({
                    status: "1",
                    msg: err.message,
                    result: ""
                  });
                }else{
                  res.json({
                    status: "0",
                    msg: "",
                    result: "success"
                  });
                }
            });
        }
      });
  });
  //登录接口
router.post("/login", function(req, res, next) {
    var params = {
        userName: req.body.userName,
        password: req.body.password
    };
    Users.findOne({}, function (err, doc) {
        if(err) {
            res.json({
              status: "1",
              msg: err.message
            });
        }else{
            var arrDoc = doc.user;
            for(var i = 0; i < arrDoc.length; i++) {
                if((arrDoc[i].userName == params.userName) && (arrDoc[i].password == params.password)) {
                    res.cookie("userName", params.userName);
                    res.json({
                      status: "0",
                      msg: "",
                      result: "success"
                    });
                    return;
                } 
            }
            res.json({
              status: "1",
              msg: "",
            });
        }
    });
});
router.post("/logout", function (req, res, next) {
	res.cookie("userName", "");
	res.json({
		status: "0",
		msg: "",
		result: ""
	});
});
router.get("/checkStatus", function (req, res, next) {
    console.log(req.cookies);
	if(req.cookies.userName) {
		Users.findOne({}, function(err, doc) {
            if(err) {
                res.json({
                    status: "1",
                    msg: err.message
                }); 
            }else{
                var jsonObj = {
                    status: "1",
                    msg: ""
                }
                console.log(doc.user.forEach);
                doc.user.forEach(function (value) {
                    console.log(req.cookies.userName);
                    if(value.userName == req.cookies.userName) {
                        // res.json({
                        //     status: "0",
                        //     msg: value.userName
                        // });
                        jsonObj = {
                            status: "0",
                            msg: value.userName
                        }
                        console.log(444);
                        return;
                    }

                });

            }
            res.json(jsonObj);
            console.log(333);
        });
	}else{
		res.json({
			status: "1",
			msg: ""
		});
	}
});

router.post("/addCart", function (req, res, next) {
    var jsonObj = {};
    var params = req.body.goodList;
    console.log(params);
    if(req.cookies.userName) {  
        Users.findOne({}, function(err, doc) {
            if(err) {
                //res.json是异步的，只有这个函数结束后才能终止程序。
                res.json({
                    status: "1",
                    msg: ""
                });
            }else{
                var flag = true;
                doc.user.forEach(function(value) {
                    if(value.userName == req.cookies.userName) {
                        // value.cartList.forEach(function(item) {
                        //     if(item.productId == params.productId) {
                        //         flag = false;
                        //         jsonObj = {
                        //             status: "3",
                        //             msg: ""
                        //         };   
                        //     }
                        // }); 
                        for(var i = 0, len = value.cartList.length; i < len; i++) {
                            if(value.cartList[i].productId == params.productId) {
                                flag = false;
                                res.json({
                                    status: "3",
                                    msg: ""
                                }); 
                                break;  
                            }
                        }
                        if(flag) {
                            console.log(111111111111);
                            value.cartList.push(params);
                            doc.save(function(err1, doc1) {
                                if(err1) {
                                    res.json({
                                        status: "1",
                                        msg: ""
                                    });
                                }else{
                                    res.json({
                                        status: "0",
                                        msg: ""
                                    });
                                }
                            });
                        }  
                    }
                });
                
            }
        });
    }else{
        res.json({
            status: "2",
            msg: ""
        });
    }
    
});
router.post("/cart", function (req, res, next) {
	if(req.cookies.userName) {
        Users.findOne({}, function(err, doc) {
            if(err) {
                res.json({
                    status: "1",
                    msg: ""
                });
            }else{
                doc.user.forEach(function(value) {
                    if(value.userName == req.cookies.userName) {
                        res.json({
                            status: "0",
                            msg: value.cartList
                        });
                    }
                });
            }
        });
    }else{
        res.json({
            status: "1",
            msg: ""
        });
    }
});
router.post("/delCart", function(req, res, next) {
    Users.findOne({}, function(err, doc) {
        if(err) {
            res.json({
                status: "1",
                msg: ""
            });
        }else{
            doc.user.forEach(function(value) {
                if(value.userName == req.cookies.userName) {
                    value.cartList.forEach(function(item, index) {
                        if(item.productId == req.body.productId) {
                            value.cartList.splice(index, 1);
                        }
                    });
                }
            });
            doc.save(function(err1, doc1) {
                if(err1) {
                    res.json({
                        status: "1",
                        msg: ""
                    });
                }else{
                    res.json({
                        status: "0",
                        msg: ""
                    });
                }
            });
        }
    });
});

router.post("/modCart", function (req, res, next) {
    Users.findOne({}, function(err, doc) {
        if(err) {
            res.json({
                status: "1",
                msg: ""
            });
        }else{
            doc.user.forEach(function(value) {
                if(value.userName == req.cookies.userName) {
                    // value.cartList.forEach(function(item, index) {
                    //     if(item.productId == req.body.productId) {
                    //         item.productNum ++;
                    //     }
                    // });
                    for(var i = 0; i < value.cartList.length; i++) {
                        if(value.cartList[i].productId == req.body.productId) {
                            value.cartList[i].productNum = req.body.productNum;
                        }
                    }
                }
            });
            console.log(doc.user[1].cartList[0].productNum);
            doc.save(function(err1, doc1) {
                if(err1) {
                    res.json({
                        status: "1",
                        msg: ""
                    });
                }else{
                    res.json({
                        status: "0",
                        msg: doc1
                    });
                }
            });
        }
    });
});

router.post("/checked", function (req, res, next) {
    Users.findOne({}, function(err, doc) {
        if(err) {
            res.json({
                status: "1",
                msg: ""
            });
        }else{
            doc.user.forEach(function(value) {
                if(value.userName == req.cookies.userName) {
                    // value.cartList.forEach(function(item, index) {
                    //     if(item.productId == req.body.productId) {
                    //         item.productNum ++;
                    //     }
                    // });
                    for(var i = 0; i < value.cartList.length; i++) {
                        if(value.cartList[i].productId == req.body.productId) {
                            value.cartList[i].checked = req.body.checked;
                        }
                    }
                }
            });
            doc.save(function(err1, doc1) {
                if(err1) {
                    res.json({
                        status: "1",
                        msg: ""
                    });
                }else{
                    res.json({
                        status: "0",
                        msg: doc1
                    });
                }
            });
        }
    });
});
router.post("/checkedAll", function (req, res, next) {
    Users.findOne({}, function(err, doc) {
        if(err) {
            res.json({
                status: "1",
                msg: ""
            });
        }else{
            doc.user.forEach(function(value) {
                if(value.userName == req.cookies.userName) {
                    // value.cartList.forEach(function(item, index) {
                    //     if(item.productId == req.body.productId) {
                    //         item.productNum ++;
                    //     }
                    // });
                    for(var i = 0; i < value.cartList.length; i++) {
                            value.cartList[i].checked = req.body.checked;
                    }
                }
            });
            doc.save(function(err1, doc1) {
                if(err1) {
                    res.json({
                        status: "1",
                        msg: ""
                    });
                }else{
                    res.json({
                        status: "0",
                        msg: doc1
                    });
                }
            });
        }
    });
});
module.exports = router;