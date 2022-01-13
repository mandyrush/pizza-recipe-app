const express = require('express');
const router = express.Router();

const controller = require('../controllers/steps');
const middleware = require('../middleware/auth');

// Get all steps
router.get('/steps', controller.getRecipeSteps);

// Get a single step by it's id
router.get('/steps/:id', controller.showRecipeStep);

// Create a new step
router.post('/steps', middleware.checkJWT, controller.createStep);

// Update a step by it's id
router.put('/steps/:id', middleware.checkJWT, controller.updateStep);

// Delete a step by it's id
router.delete('/steps/:id', middleware.checkJWT, controller.deleteStep);

module.exports = router;