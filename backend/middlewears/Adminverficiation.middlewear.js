const jwt = require("jsonwebtoken");    
require("dotenv").config();

const AdminVerification = (req,res,next) => {
    const token = req.headers.AdminVerification;
    if(token){
        const decodedToken = jwt.verify(token,process.env.adminKey);
        console.log(decodedToken);
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

module.exports = {AdminVerification}
