let mysql = require('mysql');
require('dotenv').config();

class Connection {
    constructor () {
        if (!this.pool) {
            console.log('Creating connection pool...');
            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: process.env.CLEARDB_HOST,
                user: process.env.CLEARDB_USER,
                password: process.env.CLEARDB_PASSWORD,
                database: process.env.CLEARDB_DATABASE
            })
            return this.pool;
        }
        return this.pool;
    }
}

const instance = new Connection();

module.exports = instance;