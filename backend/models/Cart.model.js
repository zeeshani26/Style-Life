const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userID:{
        type:String,
    },
    restro:{
     type:{
        name:String,
        offers:String,
        rating:String,
        img_src:String,
        bought:String,
        address:String
     }
    },
    deals:{
        type:[
            {
                name:String,
                tag:String,
                bought:String,
                discount:String,
                price:String,
                discouted_price:String,
            }
        ]
    },


});

const CartModel = mongoose.model('cart',CartSchema);

module.exports = {CartModel};