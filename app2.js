//load hhtp module
const http = require('http');
const  fs = require('fs'); 
// const  myModule = require('./videos');

//create a HTTP server
// a server is an object that extends EventEmitter!
//we can therefore register an event handler
//here we use an anonymous function with req, resp
const server = http.createServer((request, response) => {
    //check if the route is /
    if (request.url === '/') {
        response.write("Hello from node.js on ishana's computer");
        response.end();
    }

    if (request.url === '/site') {
        fs.readFile('index.html', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            return response.end();
        });
    }
if (request.url === '/image.jpg') {
        fs.readFile('image.jpg', function(err, data) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(data);
            return response.end();
        });
    }
});
//tell the server to listen on port 8080
server.listen(8080);
console.log("Server started and listening on port 8080");