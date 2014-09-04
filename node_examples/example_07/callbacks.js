fs = require('fs')

function readFile(filename, callback) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      callback(err);
    }
    callback(null, data.toString());
  }); 
}

readFile('./erlkoenig.txt', function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});