const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=282c7b8868ed7a048a2d5399674203cb&query=' + latitude + ',' + longitude + '&units=m';
    request( { url, json: true }, (error, { body } = {}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if ( body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, `${body.current.weather_descriptions[0]}. The current temperature is ${body.current.temperature}°C. It feels like ${body.current.feelslike}°C.
            The humidity is ${body.current.humidity}%. The chance of rain is ${body.current.precip}%`);
        }
    });
};

module.exports = forecast;