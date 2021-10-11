const express = require('express');
const router = express.Router();

let middleware = require('../middleware/auth');
let controller = require('../controllers/authCheck');

router.get('/authorized', middleware.jwtCheck, controller.authCheck);

module.exports = router;