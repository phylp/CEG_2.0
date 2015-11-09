var express = require('express');
var app = express();
var http = require('http');

app.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('server running')
});

