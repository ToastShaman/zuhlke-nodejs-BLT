var request = require("request");

function getIP() {
  request('http://whatismyip.akamai.com', function(error, response, body) {
    return body;
  });
}

console.log(getIP());
