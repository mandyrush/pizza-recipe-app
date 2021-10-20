const express = require('express');
const router = express.Router();

const controller = require('../controllers/steps');

// Get all steps
router.get('/steps', controller.getRecipeSteps);

// Get a single step by it's id
router.get('/steps/:id', controller.showRecipeStep);

// Create a new step
router.post('/steps', controller.createStep);

// Update a step by it's id
router.put('/steps/:id', controller.updateStep);

// Delete a step by it's id
router.delete('/steps/:id', controller.deleteStep);

module.exports = router;