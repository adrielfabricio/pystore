const express = require('express');
const app = express();
const { products } = require('./config/mock');

const port = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
  res.render('pages/index', {
    products: products
  });
});

// create product
app.post('/products', (req, res) => {
  // ...
});

// product details
app.get('/products/:id', (req, res) => {
  // ...
});

app.listen(port, () => {
  console.debug(`server started at http://localhost:${port}`);
});