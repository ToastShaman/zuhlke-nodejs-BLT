var request = require("request");

function getIP(cb) {
  request('http://whatismyip.akamai.com', function(error, response, body) {
    cb(body);
  });
}

var display = function(body) {
  console.log(body);
}

getIP(display);
