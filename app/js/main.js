'use strict';

(function(){
  var socket = io('http://localhost:1337/output');

  socket.on('move', function(mouse, id){
    // console.log(id, mouse);
  })
})();
