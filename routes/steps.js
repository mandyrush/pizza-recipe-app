const express = require('express');
const router = express.Router();

const controller = require('../controllers/steps');

// Get all steps
router.get('/steps', controller.showSteps);

// Get a single step by it's id
router.get('/steps/:id', controller.showStep);

// Create a new step
router.post('/step', controller.createStep);

// Update a step by it's id
router.put('/step/:id', updateStep);

// Delete a step by it's id
router.delete('/step/:id', deleteStep);

module.exports = router;