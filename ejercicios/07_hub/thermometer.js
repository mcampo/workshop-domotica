'use strict'
const five = require('johnny-five');
const EventEmitter = require('events').EventEmitter;

let device = null; // <-- crear una instancia
device.name = null; // <-- darle un nombre
device.events = null; // <-- indicar los eventos que vá a emitir

device.init = () => {
  let board = new five.Board({
    port: '/dev/rfcomm0',
    repl: false
  });

  board.on('ready', () => {
    let thermometer = new five.Thermometer({
      controller: 'LM35',
      pin: 'A0',
      freq: 2000
    });

    thermometer.on('data', () => {
      // ↓ emitir un evento 'temperature' con la medición de la temperatura

    });

    // ↓ emitir el evento 'ready'
    
  });
};

module.exports = device;
