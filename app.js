// Load Packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Conffigure app to use bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Configure server port
var port = process.env.PORT || 8080;

// Configure Router
var router = require('./routes')(app,Book);

// Run server
var server = app.listen(port,function(){
  console.log("Express server has started on port : "+port)
});


// Configure mongoose

// Connect to mongoDB server
var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
  console.log("Connected to mongoDB server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

// Define model
var Book = require('./models/book');
