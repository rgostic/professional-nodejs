var fs = require('fs');
var promise = require('promise');

function readNoteFile(path) {
  console.log('path: ' + path);
  return new Promise(function (resolve, object) {
    fs.open(path, 'r', function(err, fd) {
      if (err) { throw err; }


      var readBuffer = new Buffer(1024),
          bufferOffest = 0,
          bufferLength = readBuffer.length,
          filePostion = 0;

      fs.read(fd,
              readBuffer,
              bufferOffest,
              bufferLength,
              filePostion,
              function(err, readBytes) {
                if (err) { throw err; }
                console.log('=== read ' + readBytes + ' bytes');
                console.log('readBuffer: ' + readBuffer.toString());
                let content = readBuffer.slice(0, readBytes).toString();
                resolve(content);
              });

    });
  });
}
module.exports = readNoteFile;