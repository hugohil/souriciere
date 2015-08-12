'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);

app.use(express.static('app'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

var inputs = io.of('/inputs');
var output = io.of('/output');

console.log('Server running on http://localhost:1337');

inputs.on('connection', function (socket) {
  console.log('New connection on /inputs namespace!');
  socket
  .on('mouse-move', function(mouse){
    output.emit('move', mouse, socket.id);
  })
  .on('disconnect', function(){
    console.log('Disconnection!');
  });
});

output.on('connection', function (socket) {
  console.log('New connection on /output namespace!');
});