var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
	"user": [
        {
            "userName": String,
            "password": String,
            "cartList": Array
        }
    ]
});

module.exports = mongoose.model("User", userSchema);