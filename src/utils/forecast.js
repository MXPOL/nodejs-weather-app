const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const API_key = process.env.API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_key}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, (body.weather)[0].description + ' It is currently ' + body.main.temp + ' degress out. ')
        }
    })
}
 
module.exports = forecast