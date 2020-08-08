/*
index.js
*/
"use strict";

var msg = "hello javascript!!!";
console.log(msg);
var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p> This is from JavaScript </p>";

var result = {
    name:"jQuery",
    language:"JavaScript",
    score:4.5,
    showLog:function(){},
    owner:{
        login:"admin",
        id:12323
    }
};
result.phoneNumber = "980-890-8989";
console.log("Score is : " + result.score + " and the phone is : " + result.phoneNumber);

var results = [
    {
        name:"jQuery",
        language:"JavaScript",
        score:4.5,
        showLog:function(){},
        owner:{
            login:"admin",
            id:12323
        }
    },
    {
        name:"jUnit",
        language:"Java",
        score:3.5,
        showLog:function(){},
        owner:{
            login:"admin",
            id:12323
        }
    }
];

for(var i=0; i<results.length; i++){
    var result = results[i];
    console.log(result.name);
}

// console.log("msg is " + typeof(msg));
// console.log("resultsDiv is " + typeof(resultsDiv));

// var none;
// console.log("none is " + typeof(none));

// var aNumber = 0;
// var aDouble = 1.2;
// var trueFalse = true;

// none = 0;

// console.log("aNumber is " + typeof(aNumber));
// console.log("aDouble is " + typeof(aDouble));
// console.log("trueFalse is " + typeof(trueFalse));
// console.log("none is " + typeof(none));

// none = "text";
// console.log("none is " + typeof(none));

// function showMsg(msg){
//     console.log("Show msg : " + msg);
// }

// showMsg("Woohoooo!!!!");

// var showIt = function(msg){
//     console.log("ShowIt " + msg);
// }

// function showItThen(msg, callback){
//     showIt(msg);
//     callback();
// }

// showItThen("From showItThen called", function(){
//     console.log("callback called");
// });


