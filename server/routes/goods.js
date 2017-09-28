var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var Goods = require("../models/goods");

//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/biyao");

mongoose.connection.on("connected", function () {
	console.log("连接成功");
});
mongoose.connection.on("error", function () {
	console.log("连接失败");
});
mongoose.connection.on("disconnected", function () {
	console.log("断开连接");
});

router.get("/", function (req, res, next) {
	Goods.findOne({}, function (err, goodDoc) {
		if(err) {
			res.json({
				status: "1",
				msg: err.message
			});
		}else{
			res.json({
				status: "0",
				msg: goodDoc
			});
		}
	});
})
module.exports = router;


