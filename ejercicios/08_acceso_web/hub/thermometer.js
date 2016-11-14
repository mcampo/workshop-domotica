'use strict'
const five = require('johnny-five');
const EventEmitter = require('events').EventEmitter;

const device = new EventEmitter();
device.name = 'Thermometer';
device.events = ['temperature'];

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
      let data = { temperature: thermometer.celsius };
      device.emit('temperature', data);
    });

    device.emit('ready');
  });
};

module.exports = device;
