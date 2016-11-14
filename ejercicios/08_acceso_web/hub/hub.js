'use strict'
const thermometer = require('./thermometer.js');
const ioClient = require('socket.io-client');

const io = null; // <-- hacer conexión con la aplicación web a través de socket.io

const devices = [thermometer];
devices.forEach(device => {
  device.on('ready', () => deviceReady(device));
  device.init();
});

function deviceReady(device) {
  console.log(`Device [${device.name}] ready`);
  device.events.forEach(eventName => {
    device.on(eventName, eventData => deviceEventEmitted(device, eventName, eventData));
  });
}

function deviceEventEmitted(device, eventName, eventData) {
  console.log(`Device [${device.name}] emitted event [${eventName}]`, eventData);
  // ↓ Emitir el evento hacia la aplicación web
  
}

console.log('Hub ready');
