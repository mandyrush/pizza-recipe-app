const express = require('express');
const router = express.Router();

const controller = require('../controllers/ingredients');
const middleware = require('../middleware/auth');

// Get all ingredients
router.get('/ingredients', controller.showIngredients);

// Get an ingredient by it's id
router.get('/ingredients/:id', controller.showIngredient);

// Create a new ingredient
router.post('/ingredients', middleware.checkJWT, controller.createIngredient);

// Update an ingredient by it's id
router.put('/ingredients/:id', middleware.checkJWT, controller.updateIngredient);

// Delete an ingredient by it's id
router.delete('/ingredients/:id', middleware.checkJWT, controller.deleteIngredient);

module.exports = router;