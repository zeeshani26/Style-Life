require("dotenv").config();
const jwt = require("jsonwebtoken");


const authentication = (req,res, next)=>{
    const token = req.headers.authorization;
    // console.log(res.body,"Body");
    if(token){
        const decodedToken = jwt.verify(token,process.env.KEY);
        if(decodedToken){
            console.log("decoded token is",decodedToken)
            req.body.userID = decodedToken.id;
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