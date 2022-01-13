const express = require('express');
const router = express.Router();

const controller = require('../controllers/images');
const middleware = require('../middleware/auth');

router.get('/images', controller.getRecipeImages)

router.get('/images/:id', controller.getImageById)

router.post('/images', middleware.checkJWT, controller.createImage)

router.put('/images/:id', middleware.checkJWT, controller.setFeaturedImage)

router.delete('/images/:id', middleware.checkJWT, controller.deleteImage)

module.exports = router;