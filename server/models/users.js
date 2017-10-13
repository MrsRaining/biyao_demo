var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
	"user": [
        {
            "userName": String,
            "password": String,
            "cartList": [
                {
                    "productId": String,
                    "price": Number,
                    "title": String,
                    "imageUrl": String,
                    "productNum": Number,
                    "color": String,
                    "size": String
                }
            ],
        }
    ]
});

module.exports = mongoose.model("User", userSchema);