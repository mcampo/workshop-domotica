var EventEmitter = require('events').EventEmitter;

var device = new EventEmitter(); // <-- es una instancia de EventEmitter
device.name = 'MockDevice'; // <-- tiene un nombre
device.events = ['random']; // <-- indica la lista de eventos que emite

device.init = function() {
  setInterval(() => {
    var data = { value: Math.random() };
    device.emit("random", data); // <-- emite un evento propio de la implementación
  }, 5000);

  device.emit('ready'); // <-- emite el evento 'ready' una vez que está inicializado
};

module.exports = device;
