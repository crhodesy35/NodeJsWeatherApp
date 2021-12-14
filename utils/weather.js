const request = require('request');

const weather = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=e459763b1a0fc8033438dd6ddcdbf5bc&query=' +
    encodeURIComponent(latitude) +
    ',' +
    encodeURIComponent(longitude) +
    '&units=f';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degrees outside. It currently feels like ' +
          body.current.feelslike +
          ' degrees outside.'
      );
    }
  });
};

module.exports = weather;
