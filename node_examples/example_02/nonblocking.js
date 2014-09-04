var http = require('http');
var url = require('url');
var cp = require('child_process');

http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname;

  if (pathname === '/wait') {
    cp.exec('node block.js', myCallback);
  } else {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.end();
  }

  function myCallback() {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Thanks for waiting!\n');
    response.end();
  }
}).listen(3000);

console.log("http://localhost:3000");
console.log("http://localhost:3000/wait");