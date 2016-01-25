var mockDevice = require('./mock-device.js');

var devices = [mockDevice];
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
