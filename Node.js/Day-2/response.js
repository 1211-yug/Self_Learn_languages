const http = require('http');

const port = 4500;

const response = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write(`
        <html>
            <head>
                <title>Response</title>
            </head>
            <body>
                <h1 style='text-align:center;'>Hello Yug Patel ${port}</h1>
            </body>
        </html>
                `)
    res.end("Thank you for watching.")
})

response.listen(port, () => {
    console.log(`Server start on ${port}`);
})

