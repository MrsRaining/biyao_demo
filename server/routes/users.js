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
module.exports = router;