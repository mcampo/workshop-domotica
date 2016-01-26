var request = require('request');

function getWeather(callback) {
  request({
    uri: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires,ar&appid=44db6a862fba0b067b1930da0d769e98',
    method: 'GET',
    timeout: 10000,
    json: true
  }, (error, response, body) => {
    callback(error, body.weather[0]);
  });
}

module.exports = getWeather;
