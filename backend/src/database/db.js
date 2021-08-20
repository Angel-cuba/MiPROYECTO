require('dotenv').config();
const mysql = require('mysql');

const dbConnection = mysql.createPool({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database : process.env.DB_DATABASE,
     port: process.env.DB_PORT
});

dbConnection.getConnection((error) => {
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection was closed.');
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.log('Database has too many connections.');
        }
        if (error.code === 'ECONNREFUSED') {
            console.log('Database connection was refused.');
        }
        throw error;
    } else {
        console.log('Database is already connected---->', dbConnection.config.acquireTimeout);
     //    console.log('Database connected',dbConnection);

    }
});

module.exports = dbConnection;
