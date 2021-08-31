require('dotenv').config()
const express = require('express');
const connection = require('./connection/connection.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT

connection();
app.use(cookieParser());
app.use(express.json());
require('./routes/web')(app);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on ${PORT}`);
});