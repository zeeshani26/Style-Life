const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
mobile:Number,
name:String,
username:String,
password:String
});

const UserModel = mongoose.model("user",UserSchema);


module.exports= {UserModel};

