const express = require('express');
const router = express.Router();

const controller = require('../controllers/ratingCategories');
const middleware = require('../middleware/auth');

// Get all ratings
router.get('/rating-categories', controller.showRatingCategories);

// Get a single rating by it's id
router.get('/rating-categories/:id', controller.showRatingCategory);

// Create a new rating
router.post('/rating-categories', middleware.checkJWT, controller.createRatingCategory);

// Update a rating by it's id
router.put('/rating-categories/:id', middleware.checkJWT, controller.updateRatingCategory);

// Delete a rating by it's id
router.delete('/rating-categories/:id', middleware.checkJWT, controller.deleteRatingCategory);

module.exports = router;