const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');

// Get all users
router.get('/users', controller.getUsers);

// Get a user by it's id
router.get('/users/:id', controller.getUser);

// Create a new user
router.post('/user', controller.createUser);

// Update a user by it's id
router.put('/user/:id', controller.updateUser);

// Delete a user by it's id
router.delete('/user/:id', controller.deleteUser);

module.exports = router;