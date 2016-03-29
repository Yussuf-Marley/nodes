// **
// * Cytonn Technologies
// *
// * @author: Joseph Mahugu <jmahugu@cytonn.com>
// *
// * Project: Nodejs
// *

//Importing the required module
var http = require("http");

//Creating a Server

http.createServer(function (request, response){

	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end('Hello World');

}).listen(7070);

console.log("Server running at http://127.0.0.1:7070")





















