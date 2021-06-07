const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    // const url = 'http://api.weatherstack.com/current?access_key=1091414be2c9a8f2b1ee7e3c2b8896e7&query=' +  encodeURIComponent(latitude) + ',' +  encodeURIComponent(longitude) + '&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=1091414be2c9a8f2b1ee7e3c2b8896e7&query=' +  encodeURIComponent(latitude) + ',' +  encodeURIComponent(longitude)
    request({ url, json: true}, (error, { body } = {}) => {
        if(error){
            callback("Unable to connect to Weather service!", undefined)
        }
        else if(body.error){
            callback("Unable to find location", undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + ". \nIt is currently " + body.current.temperature + 
        " degrees out. \nIt feels like "+ body.current.feelslike + 
        " degrees out.")
        }
    })
}


module.exports = forecast