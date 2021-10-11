const express = require('express');
const router = express.Router();

const controller = require('../controllers/ingredients');

// Get all ingredients
router.get('/ingredients', controller.showIngredients);

// Get an ingredient by it's id
router.get('/ingredients/:id', controller.showIngredient);

// Create a new ingredient
router.post('/ingredient', controller.createIngredient);

// Update an ingredient by it's id
router.put('/ingredient/:id', controller.updateIngredient);

// Delete an ingredient by it's id
router.delete('/ingredient/:id', controller.deleteIngredient);

module.exports = router;