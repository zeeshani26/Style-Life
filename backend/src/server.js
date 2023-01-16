const express = require('express');
require("dotenv").config();
const { connection } = require('../configuration/db');
const {UserRouter} = require("../Routes/User")
const app = express();
app.use(express.json());
app.use("/user",UserRouter)



app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`server has been started on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
        
    }
})