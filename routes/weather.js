const express = require('express');
const router = express.Router();

const controller = require('../controllers/weather');

// Get weather data
router.get('/weather', controller.showWeather);

module.exports = router;