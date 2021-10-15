const express = require('express');
const router = express.Router();

const middleware = require('../middleware/auth')

const controller = require('../controllers/users');

router.get('/users', controller.getAllUsers)

router.get('/users/:id', controller.getUserById)

router.post('/users', middleware.jwtCheck, controller.createUser)

router.put('/users/:id', middleware.jwtCheck, controller.updateUserById)

router.delete('/users/:first_name', middleware.jwtCheck, controller.deleteUserByFirstName)

module.exports = router;