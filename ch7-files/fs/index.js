var writeNotes = require('./write-notes');
var readNotes = require('./read-notes');
var noteLocator = require('./note-locator');
var path = require('path');

let startChapter = 3;

let paths = noteLocator();

function parsePaths(noteLocation) {
  return noteLocation + 'notes.txt';
}



function sortPaths(d1, d2) {
  var sort1 = 0;
  var dir1 = path.basename(d1);
  var dir2 = path.basename(d2);
  console.log(dir1.indexOf('ch'));
  if (dir1.indexOf('ch') !== 0) {
    sort1 = 0;  
  }
  else {
    sort1 = parseInt(dir1.slice(2,3));
  }
  var sort2 = 0;
  if (dir2.indexOf('ch') != 0) {
    sort2 = 0;  
  }
  else {
    sort2 = parseInt(dir2[3]);
  }

  var dirName = path.basename(dir1);

  console.log('dir: ' + dir1 + ' has sort value: ' + sort1);
  if (sort1 > sort2) {
    return 1;
  }
  if (sort1 < sort2) {
    return -1;
  }

  return 0;
}


Promise
  .all(paths.sort(sortPaths).map(parsePaths).map(readNotes))
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