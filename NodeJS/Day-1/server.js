console.log("This is a node.js");

function fruits(item) {
    console.log("This fruits name is", item);
}

fruits("Banana")

var a = 10;
var b = 20;

console.log(a + b);

// 4 video 

const fs = require('fs');

//create a file keyword is writeFileSync

fs.writeFileSync("Yug.txt", "My name is Yug Patel. My age is 18 year old. I am currently study Full Stack Developer.")


// 5 video 

console.log("if else condition");
var a = 10;
var b = 20;
let c = 30;

a = 100;
b = 200;

const total = a + b + c;

console.log(total);

// if (total % 2 === 0) {
//     return console.log(`${total} is Even`);
// } else {
//     return console.log(`${total} is Odd`);
// }

console.log("for loop");
let rows = 5;

for (var i = 0; i <= rows; i++) {
    for (var j = 0; j <= i; j++) {
        console.log(j);
    }
    console.log("\n");
}

console.log("while loop");
var d = 0;
while (d < 10) {
    d++;
    console.log(d);
}

console.log("\narray");
var users = ["Yug","Prince","Ayush","Mayur","Akshat","Banty","Tushar","Yash"];

for(var x = 0 ; x<users.length ; x++ ){
    console.log(users[x]);
}

console.log("\n Object");

var user = {
    name:'Yug',
    age:'19',
    course:'Full Stack Developer'
}

console.log(user);


