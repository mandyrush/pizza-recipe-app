const express = require('express');
const router = express.Router();

const controller = require('../controllers/ratings');
const middleware = require('../middleware/auth');

// Get all ratings
router.get('/ratings', controller.showRatings);

// Get a single rating by it's id
router.get('/ratings/:id', controller.showRating);

// Create a new rating
router.post('/ratings', middleware.checkJWT, controller.createRating);

// Update a rating by it's id
router.put('/ratings/:id', middleware.checkJWT, controller.updateRating);

// Delete a rating by it's id
router.delete('/ratings/:id', middleware.checkJWT, controller.deleteRating);

module.exports = router;