process.nextTick(function nextTick1() {
  var a = 0;
  while (true) {
    a++;
  }
});

process.nextTick(function nextTick2() {
  console.log('next tick');
});

setTimeout(function timeout() {
  console.log('timeout');
}, 1000);

// cool snippit to make sure function overlap does not occur
var interval = 1000;

function my_async_function(callback) {
  console.log('parsing file');
  callback();
}

(function schedule() {
  setTimeout(function do_it() {
    my_async_function(function() {
      console.log('async function completed');
      schedule();
    });
  }, interval);
}());