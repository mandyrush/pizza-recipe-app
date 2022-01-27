const axios = require('axios');
require('dotenv').config();

const showWeather = (req, res) => {
    console.log('Show weather route.');

    let latitude = req.query.latitude;
    let longitude = req.query.longitude;

    console.log('Latitude', latitude);
    console.log('Longitude', longitude);

    axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => console.log('Error: ', error))
}

module.exports = {
    showWeather
}