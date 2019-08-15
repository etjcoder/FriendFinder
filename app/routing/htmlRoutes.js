
//include two routes

// GET route for /survey which displays the survey page (this will be a post request here)

// default "*" route that leads to home.html which displays the home page

app.get("*", function(req, res) {
    document.write("Hello");
})

app.get("/survey", function(req, res){

    res.sendFile(path.join(__dirname, "survey.html"))

})

