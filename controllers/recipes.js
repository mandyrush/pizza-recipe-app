let db = require('../db/db');

const getRecipes = (req, res) => {
    console.log('Get all recipes route.');

    let project_id = req.query.project;
    // let sql = 'SELECT * FROM recipes WHERE project_id = ?';

    let sql = `SELECT 
                    recipes.id AS recipe_id,
                    recipes.name,
                    recipes.notes,
                    recipes.project_id,
                    recipes.version,
                    recipes.parent_version,
                    recipes.lastUpdated,
                    ratings.id AS rating_id,
                    ratings.rating_category_id,
                    ratings.score,
                    ratings.comments
                FROM 
                    recipes 
                LEFT JOIN 
                    ratings 
                ON 
                    recipes.id = ratings.recipe_id 
                WHERE 
                    project_id = ?`;

    db.query(sql, project_id, (error, results) => {
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

    let id = req.params.id;

    let sql = 'SELECT * FROM recipes WHERE id = ?';

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log('Failed to return recipe by id: ', id);
            res.sendStatus(500);
        } else {
            console.log('Results: ', results);
            res.json(results);
        }
    })
}

// Figure out logic for versions and parent versions
// Create a new recipe
const createRecipe = (req, res) => {
    console.log('Create a recipe route. ', req.body);

    // Get values from the request
    let name = req.body.name;
    let notes = req.body.notes;
    let project_id = req.body.project_id;
    let version = 1;
    let parent_version = null;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "INSERT INTO recipes (name, notes, project_id, version, parent_version) values (?, ?, ?, ?, ?)";

    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(name);
    params.push(notes);
    params.push(project_id);
    params.push(version);
    params.push(parent_version);

    // Query the database and send back appropriate status code
    db.query(sql, params, (error, results) => {
        if (error) {
            console.log('Failed to create new recipe.', error);
            res.sendStatus(500);
        } else {
            console.log('Recipe successfully created!');
            res.status(201).send(results);
        }
    })
}

const updateRecipe = (req, res) => {
    console.log('Update recipe route. ', req.body);

    let id = req.params.id;

    // Get values from the request
    let name = req.body.name;
    let notes = req.body.notes;
    let project_id = req.body.project_id;
    let version = 1;
    let parent_version = null;

    // Create sql statement with placeholders to prevent sql injection
    let sql = "UPDATE recipes SET name = ?, notes = ?, project_id = ?, version = ?, parent_version = ? WHERE id = ?";

    // Create parameters to replace sql statement placeholders
    let params = [];
    params.push(name);
    params.push(notes);
    params.push(project_id);
    params.push(version);
    params.push(parent_version);
    params.push(id);

    // Query the database and send back appropriate status code
    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log(`Failed to update recipe with id: ${id}.`, error);
            res.sendStatus(500);
        } else {
            console.log('Recipe successfully updated!');
            res.sendStatus(204);
        }
    })
}

const deleteRecipe = (req, res) => {
    console.log('Delete recipe by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'DELETE FROM recipes WHERE id = ?';

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log(`Failed to delete recipe with id: ${id}.`, error);
            res.sendStatus(500);
        } else {
            console.log('Recipe successfully deleted!');
            res.sendStatus(204);
        }
    })
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}