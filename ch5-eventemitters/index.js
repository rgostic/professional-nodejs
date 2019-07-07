var util = require('util');

var EventEmitter = require('events').EventEmitter;

var MyClass = function () {};

util.inherits(MyClass, EventEmitter);

console.dir(MyClass);
console.log(MyClass.prototype.listenerCount());

MyClass.prototype.someMethod = function() {
  console.log('doing someMethod');
  this.emit('custom', 'abc', 3);
}

var myInstance = new MyClass();

myInstance.on('custom', function(arg1, arg2) {
  console.log('custom event arg1:%s arg2:%s', arg1, arg2);
});

myInstance.someMethod();