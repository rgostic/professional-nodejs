var fs = require('fs');

fs.open('../../../ch4-buffers', 'r', function(err, fd) {
  if (err) { throw err; }

  var readBuffer = new Buffer(1024),
      bufferOffest = 0,
      bufferLength = readBuffer.length,
      filePostion = 100;

  fs.read(fd,
          bufferOffest,
          bufferLength,
          filePostion,
          function(err, readBytes) {
            if (err) { throw err; }
            console.log(readBytes);
          });
});