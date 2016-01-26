var five = require('johnny-five');
var EventEmitter = require('events').EventEmitter;

var device = new EventEmitter();
device.name = 'Door';
device.events = ['door-open'];

device.init = function() {
  var board = new five.Board({
    port: '/dev/rfcomm0',
    repl: false
  });

  board.on('ready', function () {
    var reed = five.Switch(8);

    reed.on('open', function () {
      device.emit('door-open', { timestamp: Date.now() });
    });

    device.emit('ready');
  });
};

module.exports = device;
