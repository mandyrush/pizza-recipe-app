const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');
const middleware = require('../middleware/auth');

// Get all users
router.get('/users', middleware.checkJWT, controller.getUsers);

// Get a user by id
router.get('/users/:id', middleware.checkJWT, controller.getUserById);

// Create new user
router.post('/users', middleware.checkJWT, controller.createUser);

// Update user password
router.put('/users/:id', middleware.checkJWT, controller.updateUser);

// Delete user
router.delete('/users/:id', middleware.checkJWT, controller.deleteUser);

module.exports = router;