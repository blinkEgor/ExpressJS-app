const express = require("express");
const app = express();
const port = 8404;

app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    res.send("<h1>This is the response</h1>"); // This is the response
});
/*
app.get("/about", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    res.status(200).send("<p>Successful Request</p>"); // Successful Request
});
*/
app.get("/about", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    res.send("<h1>About</h1>"); // About
});

app.get("/user", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    res.redirect("/userinfo");
    res.send("<h1>User Info Page</h1>"); // User Info Page
});

app.get("/userinfo", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    res.send("<h1>User Info Page</h1>"); // User Info Page
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`); // 8404
});