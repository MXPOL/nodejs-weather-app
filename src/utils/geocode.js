const request = require('request')

const geocode = (address, callback) => {
    const API_key = process.env.API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&APPID=${API_key}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.cod === 404) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                location: `${body.name}, ${body.sys.country}`
            })
        }
    })
}

module.exports = geocode