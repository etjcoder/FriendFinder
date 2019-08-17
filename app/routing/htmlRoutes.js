// var server = require("../../server")
// var express = require("express");
// var path = require("path")

// var app = express();
// var server = require("../../server")
//include two routes

// GET route for /survey which displays the survey page (this will be a post request here)
// default "*" route that leads to home.html which displays the home page

// app.get("/api/friends", function(req, res){

//     setTimeout(function(){
//     return res.json(friendsArray);
// }, 3000)
// });

var path = require("path");



module.exports = function(app) {
    // code here

    app.get("/survey", function(req, res){

        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    
    })

    app.get("/", function(req, res){

        res.sendFile(path.join(__dirname, "/../public/home.html"))
    
    })

    app.get("/*", function(req, res){

        res.sendFile(path.join(__dirname, "/../public/home.html"))
    
    })

    // app.use(function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/home.html"));
    // })
}

