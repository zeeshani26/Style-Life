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

RestaurantRouter.get("/filter",async(req,res)=>{
    let city = req.query.city;
    console.log(city);
    try {
        if(city){
            let data = await RestaurantModel.find({ address : { $regex:city, $options: 'i' } });
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    res.send(error.message);
    }

})

//single restaurant

RestaurantRouter.get("/:id",async(req,res)=>{
    const _id = req.query.id;
    try {
        let singleRestaurant = await RestaurantModel.findOne(_id);
        res.status(200).send(singleRestaurant)
    } catch (error) {
        console.log(error.message)
        res.send(error.message);
    }
})

module.exports= {RestaurantRouter};