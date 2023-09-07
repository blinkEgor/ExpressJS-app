const products = [
    { id: 1, category: 'electronics', price: 400, title: 'phone' },
    { id: 2, category: 'electronics', price: 900, title: 'tv' },
    { id: 3, category: 'electronics', price: 200, title: 'vacuum' },
];

const express = require('express');
const app = express();
const port = 8404;

app.post('/products/:id', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    const confirmedEntry = products.find(product => 
        product === newProduct);
    if(confirmedEntry) {
        res.status(201).send(confirmedEntry);
    } else {
        res.status(400).send("Error Creating Product");
    }
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});