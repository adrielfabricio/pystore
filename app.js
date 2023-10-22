const express = require('express');
const mysql = require('mysql');

const { port } = require('./config/constants');
const { config } = require('./config/database');
const { products } = require('./config/mock');

const app = express();
const connection = mysql.createConnection(config);
// connection.connect();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

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