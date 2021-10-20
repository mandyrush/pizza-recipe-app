const express = require('express');
const router = express.Router();

const controller = require('../controllers/ratings');

// Get all ratings
router.get('/ratings', controller.showRatings);

// Get a single rating by it's id
router.get('/ratings/:id', controller.showRating);

// Create a new rating
router.post('/ratings', controller.createRating);

// Update a rating by it's id
router.put('/ratings/:id', updateRating);

// Delete a rating by it's id
router.delete('/ratings/:id', deleteRating);

module.exports = router;