const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

const homeRoute = require('./api/routes/home')
const loginRoute = require('./api/routes/login')
const signupRoute = require('./api/routes/signup')

// MIDDLEWARES ==> any piece of code which will be executed after the server and before the routes
// Eg  -> DB Connection...
// 1. nodemon --> a dev-middleware --- u can't write dev depencies in ur code flow

// 2. body-parser --> gives u an access to req.body object
// extended : false  --> only work on string and array type data
// extended : true ---> any type of data
app.use(bodyParser.urlencoded( {extended:false} )); // if u want to take string type data
app.use(bodyParser.json());  // here u r defining the type of data which u r receiving

// 3. morgan -->DEV dependency --> Logger middleware --> Any request made on the API, will be logged on the console
app.use(morgan('dev'));

//4. mongoose --> make a DB connection before the routes are managed ---> .coonect(connectionString)
mongoose.connect('mongodb+srv://prabhleen:Sky1111@cluster0.nmqfc35.mongodb.net/loginSignup?retryWrites=true&w=majority')
 .then(console.log("connection to DB successful"))
 .catch(error => console.log(error))

// syntax -> app.use( 'path', (request,response)=>{...})

// managing routes
// syntax -> app.use( 'path', nameOfFile)
app.use('/',homeRoute)
app.use('/users/login', loginRoute)
app.use('/users/signup', signupRoute)

// throwing an error for the base('/) route
// why error => cuz any api does not work on home route
// localhost:5000/ ---> Home Route
app.use( (req,res) => {
    //res.status().json( {JS Object} )
    res.status(404).json({msg:'Seems like youre lost, please try again with a route'})
})

module.exports = app;

// every req has two parts --> header and body
// header will contain meta data of the body .. ex: content-type : application/json
// u can pass any type of data in header and body but the data should be same in head as wll as body
// ex: if u passed content-type : text/html in head then data should be in html format in body
// body will be in json format