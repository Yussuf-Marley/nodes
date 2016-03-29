// **
// * Cytonn Technologies
// *
// * @author: Joseph Mahugu <jmahugu@cytonn.com>
// *
// * Project: Nodejs / Sample static webpage using nodejs
// *

var http = require('http');
var fs = require('fs');

//Creating a server 
http.createServer (function (request, response){
	var url = request.url;
	//routing algorithm
	switch(url){
		case '/home':
			getStaticFileContent(response, '/Users/internthree/desktop/code/home.html', 'text/html');
			break;
		case '/about':
			getStaticFileContent(response, '/Users/internthree/desktop/code/about.html', 'text/html');
			break;
		case '/contact':
			getStaticFileContent(response, '/Users/internthree/desktop/code/contact.html', 'text/html');
			break;
		default:
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.end('404 - Page not found');
	}
}).listen(9090);

console.log('Server running at http://localhost:9090');


//function getStaticFileContent will read the file path of documents
function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		if(error){
			response.writeHead(500, {'contentType': 'text/plain'});
			response.end('500 - Internal Server Error.');
		}
		if(data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	});
}












