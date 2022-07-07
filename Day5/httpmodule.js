const http = require('http');
const fs = require('fs');

/* The above code is creating a server and sending a response html page to the client. */
const server = http.createServer((req, res) => {
    console.log(req.url,req.method);
    res.setHeader('Content-Type', 'Text/html');
    fs.readFile("./index.html", (err, data) => {
        if (err) {
            console.log("we have some problems with the html file" + err.message);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });
    //res.write(`<h1>Hi, you connect sucessfully!</h1>`);
    //res.end();
})

const port = 1234;

server.listen(port,'localhost',() => {
    console.log("listinig for request on 5000 port");
})