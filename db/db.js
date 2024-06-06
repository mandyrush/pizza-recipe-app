let pg = require('pg');
require('dotenv').config();
const { Pool } = pg

class Connection {
    constructor () {
        if (!this.pool) {
            console.log('Creating connection pool...');
            
            if (process.env.NODE_ENV === 'development') {
                this.pool = new Pool({
                    port: process.env.LOCAL_PORT,
                    host     : process.env.LOCAL_HOST,
                    user     : process.env.LOCAL_USERNAME,
                    password : process.env.LOCAL_PASSWORD,
                    database : process.env.LOCAL_DB,  
                })
            } else {
                this.pool = new Pool(process.env.DATABASE_URL);
            }
            
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