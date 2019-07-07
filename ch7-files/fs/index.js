var writeNotes = require('./write-notes');
var readNotes = require('./read-notes');
var noteLocator = require('./note-locator');
var path = require('path');

let startChapter = 3;

let paths = noteLocator();

function parsePaths(noteLocation) {
  var dir = noteLocation.dir;

  return dir + noteLocation.filename;
}

function sortPaths(noteLocation) {

}


Promise
  .all(paths.map(parsePaths).map(readNotes))
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