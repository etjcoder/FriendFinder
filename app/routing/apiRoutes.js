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

    app.get("/api/friends", function (req, res) {
        res.json(friendsArr);
    });

    app.post("/api/friends", function (req, res) {
        console.log("response from file:" + JSON.stringify(req.body))
        console.log("Going to loop through: " + friendsArr)

        establishMatch = function (comparisonArr) {
            const arr = comparisonArr;

            function compare(a, b) {

                let scoreA = parseInt(a.friendDif);
                let scoreB = parseInt(b.friendDif);

                let comparison = 0;

                if (scoreA > scoreB) {
                    comparison = 1
                } else if (scoreA < scoreB) {
                    comparison = -1
                }
                return comparison;
            }
            //     var bestMatch = {
            //     name: "",
            //     photo: "",
            //     friendDifference: 1000
            // }
            revisedArr = arr.sort(compare);
            setTimeout(function () {
                console.log("sorted Array: " + JSON.stringify(revisedArr));
            }, 1000)
        }



        var userData = req.body;
        var userName = userData.name
        var userScores = userData.scores;

        console.log(userName);
        console.log(userScores);
        var parsedArray = userScores.map(function (num) {
            return parseInt(num, 10);
        })
        console.log(parsedArray);

        var matchComparisons = []

        function Friend(name, friendDif) {
            this.name = name;
            this.friendDif = friendDif;
        }

        setTimeout(function () {

            // var differential = 0;
            for (i = 0; i < 3; i++) {

                tempfriendArr = friendsArr[i].scores;
                tempfriendName = friendsArr[i].name;
                console.log("Looping with: " + tempfriendName + "'s answers are: " + tempfriendArr);

                var differential = 0;
                for (j = 0; j < 10; j++) {

                    var sum = tempfriendArr[j] - parsedArray[j]
                    if (sum < 0) {
                        sum = -sum;
                    }
                    // console.log(`Question #: ${i + 1} differential: ${sum}`);

                    differential += sum;
                    // console.log("new differential: " + differential);

                    if (j === 9) {
                        let friend = new Friend(tempfriendName, differential);
                        (matchComparisons).push(friend);
                    }
                }

            }
            console.log("comparisons so far:" + JSON.stringify(matchComparisons));
            establishMatch(matchComparisons)
        }, 2000);
        // res.json({ success: true })
    })
}

//    var testFriend = {
//             name: "Jamal",
//             image: "Placeholder image",
//             answers: [5, 3, 4, 5, 6, 5, 4, 3, 2, 1]
//         }

//         var answersArray = [1,2,3,4,5,1,2,3,4,5];

//         for (i = 0; i < friendsArr.length; i ++) {

//         tempfriendArr = friendsarr[i];
//         console.log(tempfriendArr);
//         for ( i = 0; i < 10; i++) {

//         }

//     }
//          var friendScore = 0;
//         function Friend(name, friendDif) {
//             this.name = name;
//             this.friendDif = friendDif;
//         }
//         newFriendArr = []


//             for (i = 0; i < 10; i++) {

//                 numChoice = $(`#friend-question-${i + 1}`).val()
//                 console.log(`Option #${i}: ` + numChoice);
//                 answersArray.push(parseInt(numChoice));
//             }

//             setTimeout(function () {

//                 console.log(answersArray);
//                 //    console.log(parseInt(answersArray))
//                 compareFriends(answersArray);

//             }, 2000)

//             compareFriends = function (userArr) {
//                 console.log(testFriend.answers);
//                 console.log(userArr);

//                 // friendArr = parseInt(testFriend.answers);

//                 friendScore = 0;

//                 for (i = 0; i < 10; i++) {

//                     var firstSum = testFriend.answers[i] - userArr[i]
//                     console.log(`Question #: ${i + 1}: ` + `testFriend's answer was ${testFriend.answers[i]} and your answer was ${userArr[i]}`)
//                     friendScore += firstSum;

//                     console.log(`new friend score after Question #:${i + 1} is ${friendScore}`);
//                     if (i === 9) {
//                         tallyFriendScore(friendScore, testFriend.name);
//                     }
//                 }
//                 // var firstSum = testFriend.answers[0] - userArr[0];
//                 // console.log("Answer differential for question 1 = " + firstSum)
//             }

//             tallyFriendScore = function (score, id) {
//                 console.log(`Your final friend score with ${testFriend.name} is ${score}`)
//                 var id = new Friend(testFriend.name, score);
//                 console.log(id)
//                 newFriendArr.push(id);
//                 console.log(newFriendArr);
//             }

//         })




//         var b = userScores.map(function(item) {
//             return parseInt(item, 10);
//         });
//         userData = {
//             name: req.body.name,
//             photo: req.body.photo,
//             scores: b
//         }

//         console.log("Name: " + userName);
//         console.log("User score " + userScores);

//         var sum = b.reduce((a, b) => a + b, 0);
//         console.log("sum of users score" + sum);
//         // console.log("Bestfriend Match diffe " + bestMatch.friendDifference);
//         console.log("-----------------------------------")

//         // for (var i = 0; i < friends.length; i++) {

//         //     console.log(friends[i].name);
//         //     totalDifference = 0;
//         //     console.log("Total Diff " + totalDifference);
//         // }