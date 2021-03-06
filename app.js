const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address.')
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error){
        return console.log(error)
    }
    weather(latitude, longitude, (error, weatherdata) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(weatherdata)
        })
    })
}

