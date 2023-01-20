const express = require('express');
const { RestaurantModel } = require('../models/Restaurants.model');
const jwt = require("jsonwebtoken");
const { UserModel } = require('../models/Users.model');
const { SpaModel } = require('../models/spa.model');
const { HealthModel } = require('../models/health.model');
const AdminRouter = express.Router();
AdminRouter.use(express.json());

AdminRouter.get("/restro",async(req,res)=>{
 try {
    let data = await RestaurantModel.find();
    res.status(200).send(data);
 } catch (error) {
    res.send(error.message);
 }
});

AdminRouter.get("/spa",async(req,res)=>{
   try {
      let data = await SpaModel.find();
      res.status(200).send(data);
   } catch (error) {
      res.send(error.message);
   }
  });

  AdminRouter.get("/health",async(req,res)=>{
   try {
      let data = await HealthModel.find();
      res.status(200).send(data);
   } catch (error) {
      res.send(error.message);
   }
  });

module.exports = {AdminRouter};