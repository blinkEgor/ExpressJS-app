const products = [
    { id: 1, category: 'electronics', price: 400, title: 'phone' },
    { id: 2, category: 'electronics', price: 900, title: 'tv' },
    { id: 3, category: 'electronics', price: 200, title: 'vacuum' },
];

const express = require('express');
const app = express();
const port = 8404;

app.get('/products/:id', (req, res) => {
    const params = req.params;
    const requestedProduct = products.find(product => 
        product.id === Number(params.id));
    if(!requestedProduct) {
        res.status(404).send({
            message: `The product with the id ${params.id}`
        });
    } else {
        res.status(200).send(requestedProduct);
    }
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});