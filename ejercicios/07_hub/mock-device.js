'use strict'
const EventEmitter = require('events').EventEmitter;

const device = new EventEmitter(); // <-- es una instancia de EventEmitter
device.name = 'MockDevice'; // <-- tiene un nombre
device.events = ['random']; // <-- indica la lista de eventos que emite

device.init = () => {
  setInterval(() => {
    let data = { value: Math.random() };
    device.emit('random', data); // <-- emite un evento propio de la implementación
  }, 5000);

  device.emit('ready'); // <-- emite el evento 'ready' una vez que está inicializado
};

module.exports = device;
