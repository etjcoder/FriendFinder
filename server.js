
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'))
app.use(express.static('routing'))

// var htmlRoutes = require("htmlRoutes.js");

app.get("/survey", function(req, res){

    res.sendFile(path.join(__dirname, "/public/survey.html"))

})

app.listen(PORT, function(){ 

    console.log("App listening on PORT " + PORT);
})
