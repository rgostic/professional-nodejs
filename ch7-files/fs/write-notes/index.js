var fs = require('fs');

fs.open('./notes-generated.txt', 'w', function(err, fd) {
  if (err) { throw err; }



  var writeBuffer = new Buffer('writing this string');
  var bufferPosition = 0;
  var bufferLength = writeBuffer.length;
  var filePosition = null;



  fs.write( fd,
            writeBuffer,
            bufferPosition,
            bufferLength,
            filePosition,
            function(err, written) {
              if (err) { throw err; }
              console.log(' wrote ' + written + ' bytes');
            });
});

module.exports = 3;