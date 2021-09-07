require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Error } = require('mongoose');
const Data = require("../model/userdata");

async function authenticate(req,res,next){
    try{
        const token = req.cookies.brek;
        const verifyToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        console.log(verifyToken);
        const rootUser = await Data.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser) throw new Error('User not found');

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
        res.cookie("brekweb",verifyToken._id,{
            expiresIn: 10000,
            httpOnly:true,
        });
        
        next();
    }catch(err){
        return res.status(401).send('Unauthenticated token');
    }
}

module.exports = authenticate;