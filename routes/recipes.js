const express = require('express');
const router = express.Router();

const controller = require('../controllers/recipes');

// Get all recipes
router.get('/project/:project_id/recipes', controller.getRecipes);

// Get a recipe by it's id
router.get('/project/:project_id/recipes/:id', controller.getRecipe);

// Create a new recipe
router.post('/project/:project_id/recipe', controller.createRecipe);

// Update a recipe by it's id
router.put('/project/:project_id/recipe/:id', controller.updateRecipe);

// Delete a recipe by it's id
router.delete('/project/:project_id/recipe/:id', controller.deleteRecipe);

module.exports = router;