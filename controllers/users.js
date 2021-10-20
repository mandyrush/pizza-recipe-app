const db = require('../db/db');

const getUsers = (req, res) => {
    console.log('Get all users route.');

    let sql = 'SELECT * FROM users';

    db.query(sql, (error, results) => {
        if (error) {
            console.log('Failed to return users. ', error);
            res.sendStatus(500);
        } else {
            console.log('Users: ', results);
            res.json(results);
        }
    })
  }
  
const getUserById = (req, res) => {
    console.log('Get user by id route. ', req.params.id);

    let id = req.params.id;

    let sql = "SELECT * FROM users WHERE id = ?";

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log(`Failed to return user with id ${id}.`);
            res.sendStatus(500);
        } else {
            console.log('User: ', results);
            res.json(results);
        }
    })
}

const createUser = (req, res) => {
    console.log('Create user route.');

    let email = req.body.email;

    let sql = "INSERT INTO users (email) VALUES (?)"

    db.query(sql, email, (error, results) => {
        if (error) {
            console.log(`Failed to create a new user.`, error);
            res.sendStatus(500);
        } else {
            console.log('User successfully created!');
            res.sendStatus(204);
        }
    })
}

const updateUser = (req, res) => {
    console.log('Update user route.');
    
    let id = req.params.id;

    let email = req.body.email;

    let sql = "UPDATE users SET email = ? WHERE id = ?";

    let params = [];
    params.push(email);
    params.push(id);

    db.query(sql, params, (error, results) => {
        if (error) {
            console.log(`Failed to update user with id ${id}.`, error);
            res.sendStatus(500);
        } else {
            console.log('User successfully updated!');
            res.sendStatus(204);
        }
    })
}

const deleteUser = (req, res) => {
    console.log('Delete user route.');

    let id = req.params.id;

    let sql = 'DELETE FROM users WHERE id = ?';

    db.query(sql, id, (error, results) => {
        if (error) {
            console.log(`Failed to delete user with id ${id}.`, error);
            res.sendStatus(500);
        } else {
            console.log('User successfully deleted!');
            res.sendStatus(204);
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}