const express = require('express');
const router = express.Router();

const controller = require('../controllers/recipes');

router.get('/recipes', controller.getRecipes);

router.post('/recipes', controller.createRecipe);

module.exports = router;