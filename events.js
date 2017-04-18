var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter();

//server.addListener === server.on

server.on('request', function(request) {
  request.approved = true;
});

server.addListener('request', function(request) {
  console.log(request);
});

server.emit('request', {from: 'Client1'});
server.emit('request', {from: 'Client2'});
