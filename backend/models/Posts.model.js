const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
mobile:Number,
name:String,
username:String,
password:String
});

const PostModel = mongoose.model("post",PostSchema);


module.exports= {PostModel};

