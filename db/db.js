let mysql = require('mysql');
require('dotenv').config();

let connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

connection.connect();

connection.query('select now()', (error, rows) => {
    if (error) {
        console.log('There was an error connecting to the database.', error);
    } else {
        console.log('Successfully connected to the database');
    }
});

module.exports = connection;