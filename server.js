var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.static('app'));
app.use(express.json());
var htmlRoutes = require("./app/routing/htmlRoutes")
var friendsjs = require("./app/data/friends")

var friendsArray = [{
    name: "Jeffrey",
    photo: "",
    scores: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5
    ]
},
{
    name: "Molly",
    photo: "",
    scores: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
},
{
    name: "Holly",
    photo: "",
    scores: [
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3
    ]
}]


// var htmlRoutes = require("htmlRoutes.js");

////////////////////////////////////////////////////////////////
////////TEMPORARY This needs to be in htmlRoutes folder/////////
////////////////////////////////////////////////////////////////

app.get("/survey", function(req, res){

    res.sendFile(path.join(__dirname, "/survey.html"))

})

// apiRoutes
app.get("/api/friends", function(req, res){

    setTimeout(function(){
    return res.json(friendsArray);
}, 3000)
});

app.post("/api/friends", function (req, res) {

    console.log(req)
    // var surveyResults = req.body;

    // console.log(surveyResults);

});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


// app.get("/api/friends", function(req, res){

//     return res.json(friendsArray);

// })



app.listen(PORT, function(){ 

    console.log("App listening on PORT " + PORT);
    apples();
    // console.log(friendsArr)
})
