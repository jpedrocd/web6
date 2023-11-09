const mysql = require('mysql');

const host = 'host';
const database = 'database';
const user = 'user';
const password = 'password';

module.exports = () => {
    return dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
}
