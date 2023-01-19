const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
img_url:{
    type:String
},
rating:{
    type:String
},
name:String,
address:String,
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

