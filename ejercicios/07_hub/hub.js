var mockDevice = require('./mock-device.js');
// ↓ requerir el módulo 'thermometer.js'

var devices = [mockDevice]; // <-- agregar el dispositivo 'thermometer' a la lista de dispositivos
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
}

console.log('Hub ready');
