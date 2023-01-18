const express = require('express');
const RestaurantRouter = express.Router();
const {RestaurantModel} = require("../models/Restaurants.model");       

//for getting all the restaurants
RestaurantRouter.get("/",async(req,res)=>{
    try {
        let restaurants = await RestaurantModel.find();
        res.status(200).send(restaurants);
    } catch (error) {
        console.log(error);
    }
})
//filter for restaurants

RestaurantRouter.get("/filter",(req,res)=>{
    let city1 = req.query.city;;  
    res.send(city1);

})

module.exports= {RestaurantRouter};