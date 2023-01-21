const mongoose = require('mongoose');

const HealthSchema = mongoose.Schema({
img:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
address:{
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
    type:[
        {
            timing:String,
            availability:String,
            bought:String,
            discount:String,
            discounted_price:String,
            name:String,
            price:String,
            Service:String
        }
    ]
},
});

const HealthModel = mongoose.model("health",HealthSchema);


module.exports= {HealthModel};

