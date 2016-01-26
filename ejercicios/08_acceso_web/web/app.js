var http = require('http');
var path = require('path');
var express = require('express');
var ioServer = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = ioServer(server);

app.use(express.static(path.join(__dirname, 'public')));

var hubs = null; // <-- crear namespace para los hubs
var frontends = null; // <-- crear namespace para los frontends

// ↓ Escuchar nuevas conexiones de hubs, y por cada hub escuchar los eventos que nos interesan

server.listen(3000, function () {
  console.log('Web ready');
});
