let db = require('../db/db');

const showProjects = (req, res) => {
    console.log('Show all projects route.');

    let sql = 'SELECT * FROM projects';

    db.query(sql, (error, rows) => {
        if (error) {
            console.log('Failed to get all projects');
            res.sendStatus(500);
        } else {
            console.log('Get all projects: ', rows);
            res.send(rows);
        }
    })
}

const showProject = (req, res) => {
    console.log('Show single project by id route. ', req.params.id);
    
    let id = req. params.id;

    let sql = 'SELECT * FROM projects WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to get project by id');
            res.sendStatus(500);
        } else {
            console.log('Get project by id: ', rows);
            res.send(rows);
        }
    })
}


// @todo figure out how to store current logged in user
// using temporary hard-coded user

// Figure out featured image id - currently a chicken or egg situation...
const createProject = (req, res) => {
    console.log('Create new project route. ', req.body);

    let name = req.body.name;
    let featured_image_id = req.body.featured_image_id;
    let user_id = 35;

    let params = [];
    params.push(name);
    params.push(featured_image_id);
    params.push(user_id);

    let sql = 'INSERT INTO projects (name, featured_image_id, user_id) VALUES (?, ?, ?)';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to create project', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully created project!');
            res.sendStatus(204);
        }
    })
}

const updateProject = (req, res) => {
    console.log('Update project by id route. ', req.body);

    let id = req.params.id;
    let name = req.body.name;
    let featured_image_id = req.body.featured_image_id;
    let user_id = 35;

    let params = [];
    params.push(name);
    params.push(featured_image_id);
    params.push(user_id);
    params.push(id);

    let sql = 'UPDATE projects SET name = ?, featured_image_id = ?, user_id = ? WHERE id = ?';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to update project ', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully updated project with id: ', id);
            res.sendStatus(204);
        }
    })
}

const deleteProject = (req, res) => {
    console.log('Delete project by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'DELETE from projects WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to delete project');
            res.sendStatus(500);
        } else {
            console.log('Successfully deleted project with id: ', id);
            res.sendStatus(204);
        }
    })
}

module.exports = {
    showProjects,
    showProject,
    createProject,
    updateProject,
    deleteProject
}