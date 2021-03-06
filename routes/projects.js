const express = require('express');
const router = express.Router();

const controller = require('../controllers/projects');
const middleware = require('../middleware/auth');

// Get all projects
router.get('/projects', middleware.checkJWT, controller.showProjects);

// Get a single project by it's id
router.get('/projects/:id', middleware.checkJWT, controller.showProject);

// Create a new project
router.post('/projects', middleware.checkJWT, controller.createProject);

// Update a project by it's id
router.put('/projects/:id', middleware.checkJWT, controller.updateProject);

// Delete a project by it's id
router.delete('/projects/:id', middleware.checkJWT, controller.deleteProject);

module.exports = router;