// var server = require("../../server")
var express = require("express");
var path = require("path")

var app = express();
var server = require("../../server")
//include two routes

// GET route for /survey which displays the survey page (this will be a post request here)
// default "*" route that leads to home.html which displays the home page

// app.get("/api/friends", function(req, res){

//     setTimeout(function(){
//     return res.json(friendsArray);
// }, 3000)
// });

apples = function(){

    console.log("I like apples")
}