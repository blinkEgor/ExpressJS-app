// npm init -y              "init server"
// npm install express      "install express modul"

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Create routes
app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

// listening on a port
app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});

// node index.js            "start server"