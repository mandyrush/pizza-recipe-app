let db = require('../db/db');

const showRatingCategories = (req, res) => {
    console.log('Show all rating categories route.');

    let sql = 'SELECT * FROM rating_categories';

    db.query(sql, (error, rows) => {
        if (error) {
            console.log('Failed to get all rating categories');
            res.sendStatus(500);
        } else {
            console.log('Get all rating categories', rows);
            res.send(rows);
        }
    })
}

const showRatingCategory = (req, res) => {
    console.log('Show single rating category by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'SELECT * FROM rating_categories WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to get rating category by id');
            res.sendStatus(500);
        } else {
            console.log('Get rating category by id: ', rows);
            res.send(rows);
        }
    })
}

const createRatingCategory = (req, res) => {
    console.log('Create new rating category route. ', req.body);

    let name = req.body.name;
    let is_active = true;

    let params = [];
    params.push(name);
    params.push(is_active);

    let sql = 'INSERT INTO rating_categories (name, is_active) VALUES (?, ?)';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to create rating category', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully created rating category!');
            res.sendStatus(204);
        }
    })
}

const updateRatingCategory = (req, res) => {
    console.log('Update rating category by id route. ', req.body);

    let name = req.body.name;
    let is_active = req.body.is_active;
    let id = req.params.id;

    let params = [];
    params.push(name);
    params.push(is_active);
    params.push(id);

    let sql = 'UPDATE rating_categories SET name = ?, is_active = ? WHERE id = ?';

    db.query(sql, params, (error, rows) => {
        if (error) {
            console.log('Failed to update rating category ', error);
            res.sendStatus(500);
        } else {
            console.log('Successfully updated rating category with id: ', id);
            res.sendStatus(204);
        }
    })
}

const deleteRatingCategory = (req, res) => {
    console.log('Delete rating category by id route. ', req.params.id);

    let id = req.params.id;

    let sql = 'DELETE from rating_categories WHERE id = ?';

    db.query(sql, id, (error, rows) => {
        if (error) {
            console.log('Failed to delete rating category');
            res.sendStatus(500);
        } else {
            console.log('Successfully deleted rating category with id: ', id);
            res.sendStatus(204);
        }
    })
}

module.exports = {
    showRatingCategories,
    showRatingCategory,
    createRatingCategory,
    updateRatingCategory,
    deleteRatingCategory
}