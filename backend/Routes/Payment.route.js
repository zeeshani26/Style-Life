const express= require("express");
const { PaymentModel } = require("../models/Payment.model");

const PaymentRouter = express.Router();

PaymentRouter.get("/",async(req,res)=>{
    try {
        let data = await PaymentModel.find();
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
});

PaymentRouter.post("/add",async(req,res)=>{
    try {
        const single = new PaymentModel(req.body);
        await single.save();
        let data = await PaymentModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
})


module.exports={PaymentRouter}