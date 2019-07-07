var writeNotes = require('./write-notes');
var readNotes = require('./read-notes');
var path = require('path');

let startChapter = 3;
let paths = [ path.join(__dirname + '/../../notes.txt'),
  path.join(__dirname + '/../../ch4-buffers/notes.txt'),
  path.join(__dirname + '/../../ch5-eventemitters/notes.txt'),
  path.join(__dirname + '/../../ch6-timers/notes.txt'),
  path.join(__dirname + '/../../ch7-files/notes.txt') ];

Promise
  .all(paths.map(readNotes))
  .then(function(notes) {    
    writeNotes(notes.map(function (note, i) {
      if (i == 0) {
        var result = "General Notes";
      } 
      else {
        var result = 'Chapter ' + (i + startChapter);
      }
      
      var resultLength = result.length;
      result += '\r';
      result += Array.apply(null, {length: resultLength}).map(function(a, b) {return '=';}).join('');
      result += '\r';
      result += note;
      return result;
    }).join('\r\r'));
  });