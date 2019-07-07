var path = require('path');

console.log(path.normalize('/foo/bar/../quaz/./bark/'));

console.log(path.resolve('/foo', 'bar'));
console.log(path.resolve('/foo', './bar'));
console.log(path.resolve('/foo', '/bar'));
console.log(path.resolve('/foo', '../bar'));
console.log(path.resolve('/foo', '/..'));

console.log(__dirname);
console.log(__filename);

console.log(path.relative(__dirname, "../"));
console.log(path.relative('../ch5-eventemitters/index.js', __dirname));

console.log(path.basename('../ch5-eventemitters/index.js'));

console.log(path.basename('../ch5-eventemitters/index.js', path.extname('../ch5-eventemitters/index.js')));

var fs = require('fs');