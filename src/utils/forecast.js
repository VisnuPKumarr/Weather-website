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
            callback(undefined, "\nCurrent weather: " + body.current.weather_descriptions[0] + 
                ". \n\nIt is currently " + body.current.temperature + 
        " degrees out. \nCurrent precipitation level is " + body.current.precip + 
        "mm/hr. \nCurrent humidity is " + body.current.humidity + 
        "%. \nCloud cover is " + body.current.cloudcover + 
        "%. \nWind is currently blowing at "+ body.current.wind_speed + 
        " kmph towards " + body.current.wind_dir + " (" + body.current.wind_degree + 
        " degrees) direction. \nIt feels like "+ body.current.feelslike + 
        " degrees out. \nAir pressure is currently " + body.current.pressure + 
        "MB. \nCurrent UV-index is " + body.current.uv_index)
        }
    })
}


module.exports = forecast