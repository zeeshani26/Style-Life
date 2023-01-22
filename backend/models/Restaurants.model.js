const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
img_src:{
    type:String,
    required:true
},
rating:{
    type:String,
},
name:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
offers:String,
bought:String,
deals:{
    type:[
        {
            _id:String,
            tag:String,
            bought:String,
            discount:String,
            name:String,
            price:String,
            discounted_price:String,
            availability:String,
            timing:String,
        }
    ]
},
});

const RestaurantModel = mongoose.model("rest",RestaurantSchema);


module.exports= {RestaurantModel};

