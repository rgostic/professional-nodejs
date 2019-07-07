var path = require('path');

var basedir = path.join(__dirname, '/../../../');

console.log(basedir);

var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file, somethingElse, alsothis, lol) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {      
      if (file === 'notes.txt') {
        filelist.push(dir);
      }
    }
  });
  return filelist;
};

var walkSyncRoot = function() {
  return walkSync(basedir, []);
}

module.exports = walkSyncRoot;
