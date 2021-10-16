const express = require('express');
const router = express.Router();

const middleware = require('../middleware/auth')

const controller = require('../controllers/users');

router.get('/users', controller.getUsers)

router.get('/users/:id', controller.getUserById)

router.post('/user', controller.createUser)

router.put('/user/:id', controller.updateUser)

router.delete('/user/:id', controller.deleteUser)

module.exports = router;