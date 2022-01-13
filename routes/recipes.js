const express = require('express');
const router = express.Router();

const controller = require('../controllers/recipes');
const middleware = require('../middleware/auth');

// Get all recipes
router.get('/recipes', middleware.checkJWT, controller.getRecipes);

// Get a recipe by it's id
router.get('/recipes/:id', middleware.checkJWT, controller.getRecipe);

// Create a new recipe
router.post('/recipes', middleware.checkJWT, controller.createRecipe);

// Update a recipe by it's id
router.put('/recipes/:id', middleware.checkJWT, controller.updateRecipe);

// Delete a recipe by it's id
router.delete('/recipes/:id', middleware.checkJWT, controller.deleteRecipe);

module.exports = router;