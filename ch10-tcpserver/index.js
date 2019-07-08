var server = require('net').createServer();

var port = 4001;

server.on('listening', function() {
  console.log('server listening on port ' + port);
});

server.on('connection', function(socket) {
  console.log('server has a new connection');
  socket.end();
  server.close();
})

server.on('close', function() {
  console.log('server closed');
});

server.on('error', function(err) {
  console.log('error :' . err.message);
});

server.listen(port);