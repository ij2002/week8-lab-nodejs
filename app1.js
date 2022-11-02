//load hhtp module
const http = require('http');

//create a HTTP server
// a server is an object that extends EventEmitter!
//we can therefore register an event handler
//here we use an anonymous function with req, resp
const server = http.createServer((request, response) => {
    //check if the route is /
    if (request.url === '/') {
        response.write("Hello from node.js on Hadj's computer");
        response.end();
    }
});
//tell the server to listen on port 8080
server.listen(8080);
console.log("Server started and listening on port 8080");