// express is a fast & minimalist framework for js
// It is a server side or backend framework

///--------------------------------- creating a server-------------------------------
//import http module
const http = require('http');

//define a port
// process is a predefined file/class
const PORT = process.env.PORT || 5000;

//calling app which is responsible for managing request and responses
const app = require('./app');

// create a server using http module
const server = http.createServer(app);

//listen ur server on the defined port
server.listen(PORT);