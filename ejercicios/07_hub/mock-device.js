var EventEmitter = require('events').EventEmitter;

var device = new EventEmitter();
device.name = 'MockDevice';
device.events = ['random'];

device.init = function() {
  setInterval(() => {
    var data = { value: Math.random() };
    device.emit("random", data);
  }, 5000);

  device.emit('ready');
};

module.exports = device;
