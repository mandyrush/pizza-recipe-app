const express = require('express');
const router = express.Router();

const { requiresAuth } = require('express-openid-connect');

require('dotenv').config();

let controller = require('../controllers/auth');

router.get('/', controller.isLoggedIn);

router.get('/profile', requiresAuth(), controller.viewProfile);

// router.post('/login', controller.login);

module.exports = router;