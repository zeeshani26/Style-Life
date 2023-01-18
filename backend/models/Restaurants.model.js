const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
img_url:{
    type:String
},
rating:{
    type:String
},
name:String,
category:String,
bought:String,
type:String,
deals:{
    type:Array
},
});

const RestaurantModel = mongoose.model("rest",RestaurantSchema);


module.exports= {RestaurantModel};

