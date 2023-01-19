const express = require('express');
require("dotenv").config();
const { connection } = require('../configuration/db');
const {UserRouter} = require("../Routes/User")
const {CartRouter}= require('../Routes/Cart.route');
const app = express();
const {RestaurantRouter} = require('../Routes/Restaurants.route');
app.use(express.json());
app.use("/user",UserRouter)
app.use("/restro",RestaurantRouter);
app.use("/cart",CartRouter);

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`server has been started on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
    }
})