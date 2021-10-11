const showProjects = (req, res) => {
    console.log('Show all projects route.');
}

const showProject = (req, res) => {
    console.log('Show single project by id route. ', req.params.id);
}

const createProject = (req, res) => {
    console.log('Create new project route. ', req.body);
}

const updateProject = (req, res) => {
    console.log('Update project by id route. ', req.body);
}

const deleteProject = (req, res) => {
    console.log('Delete project by id route. ', req.params.id);
}

module.exports = {
    showProjects,
    showProject,
    createProject,
    updateProject,
    deleteProject
}