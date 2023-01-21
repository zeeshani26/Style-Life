const express = require('express');
const {CartModel} = require('../models/Cart.model');
const CartRouter = express.Router();

CartRouter.get("/",async(req,res)=>{
    const id = req.body.userId;
    console.log(req.body);
    try {
        const allData = await CartModel.find({userId:id});
        res.status(200).json(allData);
    } catch (error) {
        console.log(error.message);
    }
})

CartRouter.post("/add",async(req,res) => {
    const {userId,restroId,dealsId} = req.body;
    try {
        const user = await CartModel.find({userId});
        console.log(user)
        if(user.length>0){
            const cart= await CartModel.updateOne({userId,dealsId,restroId},{$inc:{"count":1}},{new:true})
            return res.send(cart)
        }
        else{
            const cart = new CartModel({userId,restroId,dealsId});
            cart.save();
            res.send('product added successfully');
        }
    } catch (error) {
        console.log(error.message);
    }
});



CartRouter.post("/dec",async(req,res) => {
    const {userId,restroId,dealsId} = req.body;
    try {
        const user = await CartModel.find({userId});
        console.log(user)
        if(user[0].count>=1){
            const cart= await CartModel.updateOne({userId,dealsId,restroId},{$inc:{"count":-1}},{new:true})
            return res.send(cart)
        }
        else{
            const cart= await CartModel.updateOne({userId,dealsId,restroId},{$set:{"count":0}},{new:true})
          res.send(cart)
        }
    } catch (error) {
        console.log(error.message);
    }
});

CartRouter.delete("/delete/:id",async(req,res) => {
    const id = req.params.id;
    try {
        await CartModel.findByIdAndDelete({_id:id})
    res.status(200).send("Deleted cart successfully");
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }

})




module.exports = {CartRouter};

