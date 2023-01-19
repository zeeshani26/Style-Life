const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userId:{
        type:String,
    },
    restroId:String,
    dealsId:String,
    count:{
        type:Number,
        default:1
    }

});

const CartModel = mongoose.model('cart',CartSchema);

module.exports = {CartModel};