var writeNotes = require('./write-notes');
var readNotes = require('./read-notes');
var path = require('path');

readNotes(path.join(__dirname + '/../notes.txt'))
  .then(function(notes) {
    console.log(notes.length);
    writeNotes(notes);
  });