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
    let sort= req.query.sort;
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let popular = req.query.popular;
    try {
        if(city && sort && popular){
            let data = await RestaurantModel.find({ address : { $regex:city, $options: 'i' } }).sort({name:sort,rating:1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(city && popular){
            let data = await RestaurantModel.find({ address : { $regex:city, $options: 'i' } }).sort({rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(sort && popular){
            let data = await RestaurantModel.find().sort({name:sort,rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(popular){
            let data = await RestaurantModel.find().sort({ rating:-1}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else if(sort){
            let data = await RestaurantModel.find().sort({ name:sort}).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }else if(city){
            let data = await RestaurantModel.find({ address : { $regex:city, $options: 'i' } }).skip(limit*(page-1)).limit(limit);
            res.send(data);
        }
        else{
            let data = await RestaurantModel.find().skip(limit*(page-1)).limit(limit);
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