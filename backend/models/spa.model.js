const mongoose = require('mongoose');

const SpaSchema = mongoose.Schema({
img_src:{
    type:String,
    required:true
},
rating:{
    type:String,
},
address:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
bought:String,
type:String,
deals:{
    type:[{
        bought:String,
        discount:String,
        discounted_price:String,
        name:String,
        price:Number || String,
        timing:String
    }]
},
});

const SpaModel = mongoose.model("spa",SpaSchema);


module.exports= {SpaModel};

