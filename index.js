const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8404;
const usersRouter = require("./users.js");
const postsRouter = require("./posts.js");

app.use(morgan("tiny"));

app.use("/users", usersRouter);

app.use("/posts", postsRouter);

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
/*app.get("/about", (req, res) => {
    console.log(`New request made: ${req.method}`); // GET
    res.send("<h1>About</h1>"); // About
});

app.get("/movie", (req, res) => {
    res.send('Hello from the movies directory!');
});

app.get("/movie/:id/:name", (req, res) => {
    const {id, name} = req.params;
    res.send(`Hello. I am the movie with the \
id <strong>${id}</strong> and the \
name <strong>${name}</strong> in the movies directory!`);
});*/

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`); // 8404
});