var thermometer = require('./thermometer.js');
var ioClient = require('socket.io-client');

var io = null; // <-- hacer conexión con la aplicación web a través de socket.io

var devices = [thermometer];
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
