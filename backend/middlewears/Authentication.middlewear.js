require("dotenv").config();
const jwt = require("jsonwebtoken");


const authentication = (req,res, next)=>{
    const token = req.headers.authorization;
    if(token){
        const decodedToken = jwt.verify(token,process.env.key);
        if(decodedToken){
            next()
        }
        else{
            res.send("Please Login!")
        }
    }
    else{
res.send("Please Login!")
    }
}

module.exports = {authentication}