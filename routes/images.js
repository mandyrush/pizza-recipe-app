const express = require('express');
const router = express.Router();

const controller = require('../controllers/images');

router.get('/images', controller.getRecipeImages)

router.get('/images/:id', controller.getImageById)

router.post('/images', controller.createImage)

router.put('/images/:id', controller.setFeaturedImage)

router.delete('/images/:id', controller.deleteImage)

module.exports = router;