// Create an array of questions

// Create inquirer that brings loops through each question, provide the user a list of 5 choices (1 - 5);

// require express and path as well as your other code pages

// initialize your server

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.listen(PORT, function(){ 

    console.log("App listening on PORT " + PORT);
})
