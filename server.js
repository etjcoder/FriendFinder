var bodyParser = require("body-parser")
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json( {type: "application/vnd.api+json"}));

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// var testFriend = {
//     name: "Jamal",
//     image: "Placeholder image",
//     answers: [5, 3, 4, 5, 6, 5, 4, 3, 2, 1]
// }

// var answersArray = [1,2,3,4,5,1,2,3,4,5];

// // for (i = 0; i < friendsArr.length; i ++) {
    
// // tempfriendArr = friendsarr[i];
// // console.log(tempfriendArr);
// var differential = 0;
// for ( i = 0; i < 10; i++) {

//     var sum = testFriend.answers[i] - answersArray[i]
//     if (sum < 0) {
//         sum = -sum;
//     }
//     console.log(`Question #: ${i+1} differential: ${sum}`);
//     differential += sum;
//     console.log("new differential: " + differential);
// }

// // }



app.listen(PORT, function(){ 

    console.log("App listening on PORT " + PORT);
    // apples();
    // console.log(friendsArr)
})
