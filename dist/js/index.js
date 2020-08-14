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




