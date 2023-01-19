const mongoose = require('mongoose');

const HealthSchema = mongoose.Schema({
img:{
    type:String
},
name:String,
address:{
    type:String
},
category:String,
bought:String,
type:String,
deals:{
    type:Array
},
});

const HealthModel = mongoose.model("health",HealthSchema);


module.exports= {HealthModel};

