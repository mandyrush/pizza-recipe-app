const express = require('express');
const router = express.Router();

const controller = require('../controllers/projects');

// Get all projects
router.get('/projects', controller.showProjects);

// Get a single project by it's id
router.get('/projects/:id', controller.showProject);

// Create a new project
router.post('/project', controller.createProject);

// Update a project by it's id
router.put('/project/:id', controller.updateProject);

// Delete a project by it's id
router.delete('/project/:id', controller.deleteProject);

module.exports = router;