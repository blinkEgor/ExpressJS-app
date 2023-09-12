/* эмитация базы данных */ 
const products = [
    { id: 1, category: 'electronics', price: 400, title: 'phone' },
    { id: 2, category: 'electronics', price: 900, title: 'tv' },
    { id: 3, category: 'electronics', price: 200, title: 'vacuum' },
];
/* -------------------- */

/* подключение к базе данных */ 
require('dotenv').config();
const mysql = require('mysql');
const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
    // инструкция подключения
con.connect(err => {
    if(err) { throw err }
    con.query("SELECT * FROM Customers", (error, result) => {
        if(error) throw error;
        console.log(result[2].name);
    });
});
    // прерывание соединения (рекомендуется)
con.end(error => {
    if(error) { throw error }
    console.log('Connection closed!');
});
/* ------------------------- */

/* подключение express */
const express = require('express');
const app = express();
const port = 8404;
/* ------------------- */

/* финальный прослушиватель событий */ 
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});
/* -------------------------------- */