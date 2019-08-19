var friends = require("../data/friends.js")


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArr);
    });

    app.post("/api/friends", function (req, res) {
        // console.log("response from file:" + JSON.stringify(req.body))
        // console.log("Going to loop through: " + friendsArr)

        //Set user input data
        var userData = req.body;
        var userName = userData.name
        var userScores = userData.scores;
        var parsedArray = userScores.map(function (num) {
            return parseInt(num, 10);
        })
        var matchName = "";
        console.log(userName);
        console.log(userScores);
        console.log(parsedArray);

        //set Friend Data to be compared with, start with empty variable and constructor
        var matchComparisons = [];
        function Friend(name, friendDif) {
            this.name = name;
            this.friendDif = friendDif;
        }

        //Here is primary logic, taking in all arrays from friendArr (from friend.js) and creating a differential score
        setTimeout(function () {


            for (i = 0; i < friendsArr.length; i++) {

                tempfriendArr = friendsArr[i].scores;
                tempfriendName = friendsArr[i].name;
                console.log("Looping with: " + tempfriendName + "'s answers are: " + tempfriendArr);

                var differential = 0;
                for (j = 0; j < 10; j++) {

                    var sum = tempfriendArr[j] - parsedArray[j]
                    if (sum < 0) {
                        sum = -sum;
                    }

                    differential += sum;

                    if (j === 9) {
                        let friend = new Friend(tempfriendName, differential);
                        (matchComparisons).push(friend);
                    }
                }

            }
            console.log("Unsorted comparisons:" + JSON.stringify(matchComparisons));
            establishMatch(matchComparisons)
        }, 1000);

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
                matchName = revisedArr[0].name;
                // sendData(matchName);
            }, 500)

        }
        setTimeout(function () {
            res.json({ success: true, matchName })
        }, 1000)
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