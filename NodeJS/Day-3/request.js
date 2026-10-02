// Code Step By Step 12 video code 

const http = require('http')

http.createServer((req, res) => {

    console.log(req.method);
    if(req.url == "/"){
        res.write("<h1>Hello, Yug</h1>")
    } else if(req.url == "/login"){
        res.write("<h1>Login Page</h1>")
    } else {
        res.write("<h1>Other Page</h1>")
    }
    
    res.end("Hello");

}).listen(5000)