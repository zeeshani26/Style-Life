const mongoose = require('mongoose');

const SpaSchema = mongoose.Schema({
img_url:{
    type:String
},
rating:{
    type:String
},
address:String,
name:String,
category:String,
bought:String,
type:String,
deals:{
    type:Array
},
});

const SpaModel = mongoose.model("spa",SpaSchema);


module.exports= {SpaModel};

