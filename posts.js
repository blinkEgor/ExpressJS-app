const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send('Get a list of all posts');
});

module.exports = router;