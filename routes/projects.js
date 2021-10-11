const express = require('express');
const router = express.Router();

const controller = require('../controllers/projects');

router.get('/projects', controller.showProjects);

module.exports = router;