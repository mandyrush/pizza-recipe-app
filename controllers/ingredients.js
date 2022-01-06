const db = require('../db/db');

const showIngredients = (req, res) => {
    console.log('Show all ingredients from a recipe route.');

    let recipe_id = req.query.recipe;

    let sql = 'SELECT * FROM ingredients INNER JOIN recipe_ingredient ON ingredients.id = recipe_ingredient.ingredient_id WHERE recipe_id = ?';

    db.query(sql, recipe_id, (error, results) => {
        if (error) {
            console.log('Failed to return Ingredients.');
            res.sendStatus(500);
        } else {
            console.log('Ingredients: ', results);
            res.json(results);
        }
    })
}

const showIngredient = (req, res) => {
    console.log('Show an ingredient by id route. ', req.params.id);

    let id = req.params.id;
    let sql = 'SELECT * FROM ingredients INNER JOIN recipe_ingredient ON ingredients.id = recipe_ingredient.ingredient_id WHERE ingredient_id = ?';

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log(`Failed to return ingredient with id ${id}`);
            res.sendStatus(500);
        } else {
            console.log('Ingredient: ', results);
            res.json(results);
        }
    })
}

const createIngredient = (req, res) => {
    console.log('Create a new ingredient route. ', req.body);

    let name = req.body.name;
    let sql = 'INSERT INTO ingredients (name) VALUES (?)';

    db.queryWrapper(sql, name)
        .then(results => {
            console.log('Got the insert id: ', results.insertId);

            let ingredient_id = results.insertId;
            let recipe_id = req.body.recipe_id;
            let quantity = req.body.quantity;
            let notes = req.body.notes;

            let params = [];
            params.push(ingredient_id);
            params.push(recipe_id);
            params.push(quantity);
            params.push(notes);

            let sql = 'INSERT INTO recipe_ingredient (ingredient_id, recipe_id, quantity, notes) VALUES (?, ?, ?, ?)';

            db.queryWrapper(sql, params)
                .then(
                    results => {
                        console.log(results);
                        res.sendStatus(204);
                    }
                )
        })
        .catch(error => {
            console.log(`Failed to create ingredient`, error);
            res.sendStatus(500);
        })
}

const updateIngredient = (req, res) => {
    console.log('Update an ingredient by id route. ', req.body);

    let name = req.body.name;
    let ingredient_id = req.params.id;

    params = [];
    params.push(name);
    params.push(ingredient_id);

    let sql = 'UPDATE ingredients SET name = ? WHERE id = ?';

    db.queryWrapper(sql, params)
        .then(results => {
            console.log(`Updating Ingredient with id: ${ingredient_id}`, results);

            let quantity = req.body.quantity;
            let notes = req.body.notes;

            let params = [];
            params.push(quantity);
            params.push(notes);
            params.push(ingredient_id);

            let sql = 'UPDATE recipe_ingredient SET quantity = ?, notes = ? WHERE ingredient_id = ?';

            db.queryWrapper(sql, params)
                .then(results => {
                    console.log(results);
                    res.sendStatus(204);
                })
        })
        .catch(error => {
            console.log(`Failed to create ingredient`, error);
            res.sendStatus(500);
        })
}

const deleteIngredient = (req, res) => {
    console.log('Delete an ingredient by id route. ', req.params.id);

    let ingredient_id = req.params.id;

    let sql = 'DELETE FROM ingredients WHERE id = ?';

    db.query(sql, ingredient_id, (error, results) => {
        if (error) {
            console.log('Failed to delete ingredient.', error);
            res.sendStatus(500);
        } else {
            console.log(`Successfully deleted ingredient with id: ${ingredient_id}`);
            res.sendStatus(204);
        }
    })
}

module.exports = {
    showIngredients,
    showIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
}