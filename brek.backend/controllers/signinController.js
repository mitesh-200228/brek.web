const Data = require('../model/userdata');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); 

function SignInController(){
    return{
        Home(req,res){
            return res.status(200).send("Hello Guys!!");
        },
        singIn(req, res){
            return res.status(200).json({message:"Kem Party !!"});
        },
        async signUp(req,res){
            const { FullName, email, phone,password,confirmPassword } = req.body;

            if(!FullName || !phone || !email || !password || !confirmPassword){
                return res.json({message: "All fields are required"});
            }

            const x = await Data.findOne({email});

            if(x){
                return res.status(422).json({message:"Email Already Exists"});
            }

            if(password === confirmPassword){

                const Password = crypto.createHmac('sha256', process.env.HASH_KEY).update(password).digest('hex');
                console.log(Password);
                const user = new Data({
                    FullName,email,phone,password:Password,confirmPassword:Password
                });
    
                user.save().then(() => {
                    res.status(200).json({message: 'Success'});
                }).catch(err => {
                    console.log(err);
                });
            }else return res.json({message:"Password Doesn't match"});
        },
        async PostsignIn(req, res){
            const {email,password} = req.body;
            if(!email || !password) return res.status(400).json({message: "Enter Credentials"});
            const User = await Data.findOne({email: email});
            const p = await crypto.createHmac('sha256', process.env.HASH_KEY).update(password).digest('hex');
            if(!User){
                return res.status(400).json({message: "Envalid 1 Credentials"});
            }else{
                if( p !== User.password){
                    return res.status(400).json({message:'Enter Valid Details'});
                }else{
                    const token = await User.generateAuthToken();
                    console.log(token);

                    res.cookie('brek', token,{
                        expiresIn: new Date(Date.now() + 1000000),
                        httpOnly: true,
                    });

                    return res.status(200).json({message:'Success!'});
                }
            }
        },
    }
}

module.exports = SignInController;