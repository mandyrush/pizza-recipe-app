let db = require('../db/db');

const getRecipes = (req, res) => {
    console.log('Get all recipes route.');

    let sql = 'select * from recipes';

    db.query(sql, (error, results) => {
        if (error) {
            console.log('Failed to return recipes.');
            res.sendStatus(500);
        } else {
            console.log('Results: ', results);
            res.json(results);
        }
    })
}

const getRecipe = (req, res) => {
    console.log('Get recipe by id route. ', req.params.id);
}

// Create a new recipe
const createRecipe = (req, res) => {
    console.log('Create a recipe route. ', req.body);

    // Get values from the request
    let recipeName = req.body.recipe_name;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "INSERT INTO recipes (recipe_name) values (?)";
    
    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(recipeName);

    // Query the database and send back appropriate status code
    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Insert into db failed', error);
            res.sendStatus(500);
        } else {

            res.sendStatus(204);
        }
    });
}

const updateRecipe = (req, res) => {
    console.log('Update recipe route. ', req.body);
}

const deleteRecipe = (req, res) => {
    console.log('Delete recipe by id route. ', req.params.id);
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}