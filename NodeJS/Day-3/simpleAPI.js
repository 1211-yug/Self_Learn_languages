// Code Step By Step 11 video code 

import http from 'http'

const userData =[
    {
        name: 'Yug',
        Age: '18',
        email: 'yug23423@gmail.com'
    },
    {
        name: 'Prince',
        Age: '19',
        email: 'prince523@gmail.com'
    },
    {
        name: 'Ayush',
        Age: '19',
        email: 'ayush26@gmail.com'
    },
    {
        name: 'Mayur',
        Age: '19',
        email: 'mayur942@gmail.com'
    },
    {
        name: 'Akshat',
        Age: '19',
        email: 'akshat125@gmail.com'
    },
    {
        name: 'Banty',
        Age: '19',
        email: 'Banty2412@gmail.com'
    }
]

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(userData));
    res.end();
}).listen(4000)