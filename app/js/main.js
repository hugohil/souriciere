'use strict';

(function(){
  var socket = io('http://' + config.socket.address + ':' + config.socket.port + config.socket.nsp);

  socket.on('move', function(mouse, id){
    // console.log(id, mouse);
  })
})();
