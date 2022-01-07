let db = require('../db/db');

const showRatings = (req, res) => {
    console.log('Show all ratings route.');

    let recipe_id = req.query.recipe;

    let sql = 'SELECT * FROM ratings INNER JOIN rating_categories ON ratings.rating_category_id = rating_categories.id WHERE recipe_id = ?';

    db.query(sql, recipe_id, (error, rows) => {
        if (error) {
            console.log(`Failed to get all ratings for recipe id: ${recipe_id}`);
            res.sendStatus(500);
        } else {
            console.log(`Get all ratings for recipe id : ${recipe_id}`, rows);
            res.send(rows);
        }
    })
}

const showRating = (req, res) => {
    console.log('Show single rating by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'SELECT * FROM ratings WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to get rating by id');
            res.sendStatus(500);
        } else {
            console.log('Get rating by id: ', rows);
            res.send(rows);
        }
    })
}

const createRating = (req, res) => {
    console.log('Create new rating route. ', req.body);

    let recipe_id = req.query.recipe;
    let rating_category_id = req.body.rating_category_id;
    let score = req.body.score;
    let comments = req.body.comments;

    let params = [];
    params.push(recipe_id);
    params.push(rating_category_id);
    params.push(score);
    params.push(comments);

    let sql = 'INSERT INTO ratings (recipe_id, rating_category_id, score, comments) VALUES (?, ?, ?, ?)';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to create rating', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully created rating!');
            res.sendStatus(204);
        }
    })
}

const updateRating = (req, res) => {
    console.log('Update rating by id route. ', req.body);

    let score = req.body.score;
    let comments = req.body.comments;
    let id = req.params.id;

    let params = [];
    params.push(score);
    params.push(comments);
    params.push(id);

    let sql = 'UPDATE ratings SET score = ?, comments = ? WHERE id = ?';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to update rating ', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully updated rating with id: ', id);
            res.sendStatus(204);
        }
    })
}

const deleteRating = (req, res) => {
    console.log('Delete rating by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'DELETE from ratings WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to delete rating');
            res.sendStatus(500);
        } else {
            console.log('Successfully deleted rating with id: ', id);
            res.sendStatus(204);
        }
    })
}

module.exports = {
    showRatings,
    showRating,
    createRating,
    updateRating,
    deleteRating
}