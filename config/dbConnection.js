const mysql = require('mysql');

const host = 'localhost';
const database = 'banco';
const user = 'root';
const password = 'root123';

module.exports = () => {
    return dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
}