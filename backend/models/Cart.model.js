const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userId:{
        type:String,
    },
    restroId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rest"
    },
    dealsId:{
        type:[
            {
                deals:String
            }
        ]
    },
    count:{
        type:Number,
        default:1
    }

});

const CartModel = mongoose.model('cart',CartSchema);

module.exports = {CartModel};