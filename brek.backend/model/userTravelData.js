const mongoose = require('mongoose');

const TravelData = new mongoose.Schema({
    FullName:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    CurrentLocation:{
        type:String,
        required:true,
    },
    TravelDestination:{
        type:String,
        required:true,
    },
    Date1:{
        type:Date,
        required:false,
    },
    userId:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("TravelData",TravelData);   