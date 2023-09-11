/* эмитация базы данных */ 
const products = [
    { id: 1, category: 'electronics', price: 400, title: 'phone' },
    { id: 2, category: 'electronics', price: 900, title: 'tv' },
    { id: 3, category: 'electronics', price: 200, title: 'vacuum' },
];
/* -------------------- */

/* подключение к базе данных */ 
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myUser',
    password: 'myPassword',
    database: 'myDB'
});
    // проверка ошибки
connection.connect(error => {
    if(error) { throw error }
    console.log('Connected!');
});
// прерывание соединения (рекомендуется)
connection.end(error => {
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