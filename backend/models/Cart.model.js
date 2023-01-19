const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userId:{
        type:String,
    },
    restroId:String,
    dealsId:String,
    count:Number

});

const CartModel = mongoose.model('cart',CartSchema);

module.exports = {CartModel};