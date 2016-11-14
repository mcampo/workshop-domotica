var http = require('http');
var path = require('path');
var express = require('express');
var ioServer = require('socket.io');
var getWeather = require('./weather.js');
var sendMail = require('./email.js');

var app = express();
var server = http.createServer(app);
var io = ioServer(server);

app.use(express.static(path.join(__dirname, 'public')));

var hubs = io.of('/hub');

hubs.on('connection', function (socket) {
  console.log('Hub connected')
  socket.on('door-open', function (data) {
    console.log('Received event [door-open]', data);
    onDoorOpen();
  });
});

function onDoorOpen() {
  // ↓ implementar lógica
  
}

server.listen(3000, function () {
  console.log('Web ready');
});
