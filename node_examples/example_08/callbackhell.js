var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });
var S = require('string');

function readdir(source) {
  fs.readdir(source, function(err, files) {
    if (err) {
      console.log('Error finding files: ' + err)
    } else {
      files.forEach(function(filename, fileIndex) {
        console.log(source + filename);
        if (S(filename).endsWith('.jpeg')) {
          gm(source + filename).size(function(err, values) {
            if (err) {
              console.log('Error identifying file size: ' + err)
            } else {
              console.log(filename + ' : ' + values);
              aspect = (values.width / values.height);
              widths.forEach(function(width, widthIndex) {
                height = Math.round(width / aspect);
                console.log('resizing ' + filename + 'to ' + height + 'x' + height);
                this.resize(width, height).write(destination + 'w' + width + '_' + filename, function(err) {
                  if (err) console.log('Error writing file: ' + err);
                })
              }.bind(this));
            }
          });
        }
      });
    }
  });
}

readdir('./');
