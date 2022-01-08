const express = require('express');
const router = express.Router();

const controller = require('../controllers/ratingCategories');

// Get all ratings
router.get('/rating-categories', controller.showRatingCategories);

// Get a single rating by it's id
router.get('/rating-categories/:id', controller.showRatingCategory);

// Create a new rating
router.post('/rating-categories', controller.createRatingCategory);

// Update a rating by it's id
router.put('/rating-categories/:id', controller.updateRatingCategory);

// Delete a rating by it's id
router.delete('/rating-categories/:id', controller.deleteRatingCategory);

module.exports = router;