const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Data = new mongoose.Schema({
    FullName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        min: 10,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    tokens:[
        {
            token:{
                type:String,
                required: true,
            }
            
        },
        // created
    ],
});

//token generateAuthToken system
Data.methods.generateAuthToken = async function (){
    try {
        let token = jwt.sign({_id: this._id},process.env.ACCESS_TOKEN_SECRET);
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}
module.exports = mongoose.model('userdata', Data);