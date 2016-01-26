var five = require('johnny-five');
var EventEmitter = require('events').EventEmitter;

var device = new EventEmitter();
device.name = 'Thermometer';
device.events = ['temperature'];

device.init = function() {
  var board = new five.Board({
    port: '/dev/rfcomm0',
    repl: false
  });

  board.on('ready', function () {
    var thermometer = new five.Thermometer({
      controller: 'LM35',
      pin: 'A0',
      freq: 2000
    });

    thermometer.on('data', function () {
      var data = { temperature: this.celsius };
      device.emit('temperature', data);
    });

    device.emit('ready');
  });
};

module.exports = device;
