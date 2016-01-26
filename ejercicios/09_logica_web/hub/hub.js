var door = require('./door.js');
var ioClient = require('socket.io-client');

var io = ioClient('http://your-ip:3000/hub'); // <-- reemplazar por tu ip

var devices = [door];
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
  io.emit(eventName, eventData);
}

console.log('Hub ready');
