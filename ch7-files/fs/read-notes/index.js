var fs = require('fs');

fs.open(__dirname + '/../../notes.txt', 'r', function(err, fd) {
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
            console.log(readBytes);
            console.log(readBuffer.toString());
          });
});

module.exports = 7;