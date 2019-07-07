console.log('hello buffers!');

var buf = new Buffer(10);

for (let i = 0; i < buf.length; i++ ) {
  buf[i] = i + 48;
}

console.log(buf.toString());

console.log(buf[10]);
buf[10] = 32;
console.log(buf[10]);
