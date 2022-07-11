const http = require('http');
const fs = require('fs');

/* The above code is creating a server and sending a response html page to the client. */
const server = http.createServer((req, res) => {
    console.log(req.url,req.method);
    res.setHeader('Content-Type', 'Text/html');
    /*fs.readFile("./index.html", (err, data) => {
        if (err) {
            console.log("we have some problems with the html file" + err.message);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });*/
    //res.write(`<h1>Hi, you connect sucessfully!</h1>`);
    //res.end();

    /* A switch case statement. It is checking the url and based on the url it is adding the html file
    name to the path variable. */
    let path = './htmlfiles/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/hi':
            path += 'hi.html';
            res.statusCode = 200;
            break;
        case '/welcome':
            res.statusCode = 301;
            res.setHeader('Location','/hi')
            break;
        case '/test':
            path += 'test.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    /* Reading the file from the path and sending the data to the client. */
    fs.readFile(path,(err, data) => {
        if(err) { 
            console.log("we have some problem, please check it!");
            res.end();
        } else {
        res.end(data);
        }
    })
})

/* Creating a server and listening for the request on the port 1234. */
const port = 1234;

server.listen(port,'localhost',() => {
    console.log("listinig for request on 5000 port");
})