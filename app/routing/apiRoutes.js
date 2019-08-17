// Should create two routes

// GET routes that displays the existing JSON looking at the objects of existing friends(?)

// POST routes 'api/friends' that will be used to handle incoming survey results. This will route will also be used to handle the compatibility logic


//This POST route will contain the logic that takes in the user's array of numbers and compares it with every single person in the array.
//This will assign each answer in the user's array an value for the integer (ans1, ans2, etc)
//Then this will be passed into a function that loops through the object array.
//There will then be another for loop that will loop through each object's answer array. Comparing userans1 to compans1. Assigning that difference to a number. 
//Each answer num differnce is added into a sumvalue.
//That sum value will be placed into an object lining up with each user's name
//We will then sort that array by descending order. then [0] index of that array will show the person whom you're matched up with. 
//One final function will show the user's name/profile based on referencing the JSON object.
//**BONUS****/ Add the user into the JSON array and have them upload an image/provide a photo link
var friends = require("../data/friends.js")


module.exports = function (app) {

    app.get("/api/friends", function(req, res){
        res.json(friendsArray);
    });
    
    app.post("/api/friends", function(req, res) {
        console.log("response from file:" + JSON.stringify(req.body))
       
        var difference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }
        var userData = req.body;
        var userName = userData.name
        var userScores = userData.scores;

        var greatName = "applesName"
        res.json({success: true})
    })
}
    //     var b = userScores.map(function(item) {
    //         return parseInt(item, 10);
    //     });
    //     userData = {
    //         name: req.body.name,
    //         photo: req.body.photo,
    //         scores: b
    //     }

    //     console.log("Name: " + userName);
    //     console.log("User score " + userScores);
        
    //     var sum = b.reduce((a, b) => a + b, 0);
    //     console.log("sum of users score" + sum);
    //     // console.log("Bestfriend Match diffe " + bestMatch.friendDifference);
    //     console.log("-----------------------------------")

    //     // for (var i = 0; i < friends.length; i++) {

    //     //     console.log(friends[i].name);
    //     //     totalDifference = 0;
    //     //     console.log("Total Diff " + totalDifference);
    //     // }