const express = require('express');
const {CartModel} = require('../models/Cart.model');
const CartRouter = express.Router();

CartRouter.post("/add",(req,res) => {
    const {userId,restroId,dealsId} = req.body;
    try {
        const cart = new CartModel({userId,restroId,dealsId});
        cart.save();
        res.send('product added successfully');
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = {CartRouter};

