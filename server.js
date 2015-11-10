// var express = require('express');
// var app = express();
// var http = require('http');
// var server = http.createServer(app);  

// app.use(express.static(__dirname + '/build'));

// var port = process.env.PORT || 3000;
// app.listen(port, function(){
//   console.log('server running')
// });

// var chatServer = require('./chatserver');
// chatServer.listen(server);

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

// io.on('connection', function(socket){
//   console.log('user has connected to chat');
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  });
});

http.listen(port, function(){
  console.log('listening on :3000');
});



// var chatServer = require('./chatserver');
// chatServer.listen(http);