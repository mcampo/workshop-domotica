'use strict'
const request = require('request');

function getWeather(callback) {
  request({
    uri: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires,ar&appid=3476aec0223a90279ba0369d3c5d1894',
    method: 'GET',
    timeout: 10000,
    json: true
  }, (error, response, body) => {
    callback(error, body.weather[0]);
  });
}

module.exports = getWeather;
