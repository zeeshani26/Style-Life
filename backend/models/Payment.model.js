const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
    restroId:String,
    dealsId:String,
    resamt:Number,
    dealamt:Number,
    userId:Number,
});

const PaymentModel = mongoose.model("payment",PaymentSchema);

module.exports={PaymentModel}
