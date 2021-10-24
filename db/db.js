let mysql = require('mysql');
require('dotenv').config();

class Connection {
    constructor () {
        if (!this.pool) {
            console.log('Creating connection pool...');
            this.pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
            return this.pool;
        }
        return this.pool;
    }
}

const instance = new Connection();

instance.queryWrapper = (query, params) => {
    return new Promise((resolve, reject) => {
        instance.query(query, params, (error, results) => {
            if (error) {
                console.log(`Database query failed`, error);
                return reject(error);
            } else {
                console.log('Successfully processed database query');
                resolve(results);
            }
        })
    })
}

module.exports = instance;