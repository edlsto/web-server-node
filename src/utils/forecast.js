const request = require("request");

const forecast = ({ latitude: lat, longitude: long }, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=785072119bee7a1b3df4c1df922e0d80&%20query=${lat},${long}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      cb("Unable to find location", undefined);
    } else {
      cb(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
