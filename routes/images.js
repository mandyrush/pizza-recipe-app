const express = require('express');
const router = express.Router();

const controller = require('../controllers/images');

router.get('/images', controller.getRecipeImages)

router.get('/images/:id', controller.getImageById)

router.post('/image', controller.createImage)

router.put('/image/:id', controller.setFeaturedImage)

router.delete('/image/:id', controller.deleteImage)

module.exports = router;