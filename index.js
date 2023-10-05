// npm init -y
// npm install express

const express = require('express');
const app = express();

// Create routes
app.get('/', (req, res) => {
    res.send({message: 'Hello WWW!'});
});

// listening on a port
app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});