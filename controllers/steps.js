let db = require('../db/db');

const getRecipeSteps = (req, res) => {
    console.log('Show all steps route.');

    let recipe_id = req.query.recipe;

    let sql = 'SELECT * FROM steps WHERE recipe_id = ?';

    db.query(sql, recipe_id, (error, rows) => {
        if (error) {
            console.log(`Failed to get all steps for recipe id: ${recipe_id}`);
            res.sendStatus(500);
        } else {
            console.log(`Get all steps for recipe id : ${recipe_id}`, rows);
            res.send(rows);
        }
    })
}

const showRecipeStep = (req, res) => {
    console.log('Show single step by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'SELECT * FROM steps WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to get step by id');
            res.sendStatus(500);
        } else {
            console.log('Get step by id: ', rows);
            res.send(rows);
        }
    })
}

const createStep = (req, res) => {
    console.log('Create new step route. ', req.body);

    let step = req.body.step;
    let recipe_id = req.body.recipe_id;
    let step_order = req.body.step_order;

    let params = [];
    params.push(step);
    params.push(recipe_id);
    params.push(step_order);

    let sql = 'INSERT INTO steps (step, recipe_id, step_order) VALUES (?, ?, ?)';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to create step', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully created step!');
            res.sendStatus(204);
        }
    })
}

const updateStep = (req, res) => {
    console.log('Update step by id route. ', req.body);

    let id = req.params.id;
    let step = req.body.step;
    let step_order = req.body.step_order;

    let params = [];
    params.push(step);
    params.push(step_order);
    params.push(id);

    let sql = 'UPDATE steps SET step = ?, step_order = ? WHERE id = ?';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to update step ', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully updated step with id: ', id);
            res.sendStatus(204);
        }
    })
}

const deleteStep = (req, res) => {
    console.log('Delete step by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'DELETE from steps WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to delete step');
            res.sendStatus(500);
        } else {
            console.log('Successfully deleted step with id: ', id);
            res.sendStatus(204);
        }
    })
}

module.exports = {
    getRecipeSteps,
    showRecipeStep,
    createStep,
    updateStep,
    deleteStep
}