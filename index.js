'use strict';

var config = require('./config').config();

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(config.port);

app.use(express.static(config.contentDir));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + config.contentDir + '/index.html');
});

var inputs = io.of(config.namespaces.in);
var output = io.of(config.namespaces.out);

console.log('Server running on http://%s:%d', server.address().address, server.address().port);

inputs.on('connection', function (socket) {
  console.log('New connection on ' + config.namespaces.in + ' namespace!');
  socket
  .on('mouse-move', function(mouse){
    output.emit('move', mouse, socket.id);
  })
  .on('disconnect', function(){
    console.log('Disconnection!');
  });
});

output.on('connection', function (socket) {
  console.log('New connection on ' + config.namespaces.out + ' namespace!');
});