const express = require('express');
const router = express.Router();

const controller = require('../controllers/recipes');

// Get all recipes
router.get('/recipes', controller.getRecipes);

// Get a recipe by it's id
router.get('/recipes/:id', controller.getRecipe);

// Create a new recipe
router.post('/recipe', controller.createRecipe);

// Update a recipe by it's id
router.put('/recipe/:id', controller.updateRecipe);

// Delete a recipe by it's id
router.delete('/recipe/:id', controller.deleteRecipe);

module.exports = router;