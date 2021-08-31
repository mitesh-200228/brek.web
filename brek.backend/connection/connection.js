const mongoose = require('mongoose');
const url = process.env.URL;

const connection = async() => {
    await mongoose.connect(url,
        { useFindAndModify: true,useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection successful");
    }).catch(err => {
        console.log(err);
    });
}

module.exports = connection;