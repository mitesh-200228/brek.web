const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const email = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('emailOnlyForContact',email);