'use strict'
const five = require('johnny-five');
const EventEmitter = require('events').EventEmitter;

const device = new EventEmitter();
device.name = 'Door';
device.events = ['door-open'];

device.init = () => {
  let board = new five.Board({
    port: '/dev/rfcomm0',
    repl: false
  });

  board.on('ready', () => {
    let reed = five.Switch(8);

    reed.on('open', () => {
      device.emit('door-open', { timestamp: Date.now() });
    });

    device.emit('ready');
  });
};

module.exports = device;
