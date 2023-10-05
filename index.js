// npm init -y              "init server"
// npm install express      "install express modul"

const path = require('path');
const express = require('express');
const app = express();

// Create routes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

// listening on a port
app.listen(3306, () => {
    console.log('Application listening on port 3333!');
});

// node index.js            "start server"

// mkdir folderName
// cd folderName
// cd ..