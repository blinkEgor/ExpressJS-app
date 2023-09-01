const express = require("express");
const app = express();
const port = 8404;

app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    console.log(`Hostname: ${req.hostname}`); // localhost
    if (req.hostname === 'localhost') {
        console.log('Request Accepted'); // true
    } else {
        console.log('Request Denied'); // false
    }
    console.log(`Country parameter: ${req.params.country}`); // undefined
    console.log(`Thet pet's name is: ${req.params.petName}`); // undefined
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`); // 8404
});