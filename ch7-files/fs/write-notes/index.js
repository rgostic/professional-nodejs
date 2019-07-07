var fs = require('fs');
function writeToMasterNotes(content) {
  
  fs.open('./notes-generated.txt', 'w', function(err, fd) {
    if (err) { throw err; }


    console.log(typeof content);
    var writeBuffer = new Buffer(content);
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
                console.log('=== wrote ' + written + ' bytes');
              });
  });
}
module.exports = writeToMasterNotes;