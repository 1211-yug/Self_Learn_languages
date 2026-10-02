// const fs = require('fs')
// const os = require('os')

// fs.writeFileSync("Dummy.txt","My name is Yug Patel. My age is 18 year old. I am currently study Full Stack Developer.")

// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());

// console.log("Yug");
// console.log(process.cwd());
// console.log(process.pid); 


const http = require('http');
 
http.createServer((req, res) => {
    res.write("<h1 style='text-align:center;'>Welcome to Nodejs 4000</h1>")
    res.end("Thank you for watching.")
}).listen(4000);

http.createServer((req, res) => {
    res.write("<h1 style='text-align:center;'>Welcome to Nodejs 5000 </h1>")
    res.end("Thank you for watching.")
}).listen(5000);


