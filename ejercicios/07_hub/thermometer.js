var five = require('johnny-five');
var EventEmitter = require('events').EventEmitter;

var device = null; // <-- crear una instancia
device.name = null; // <-- darle un nombre
device.events = null; // <-- indicar los eventos que vá a emitir

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
      // emitir un evento 'temperature' con la medición de la temperatura
    });

    // emitir el evento 'ready'

  });
};

module.exports = device;
