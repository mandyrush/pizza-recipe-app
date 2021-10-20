const express = require('express');
const router = express.Router();

const middleware = require('../middleware/auth')

const controller = require('../controllers/users');

router.get('/users', controller.getUsers)

router.get('/users/:id', controller.getUserById)

router.post('/users', controller.createUser)

router.put('/users/:id', controller.updateUser)

router.delete('/users/:id', controller.deleteUser)

module.exports = router;