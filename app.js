const express = require('express');
const mysql = require('mysql');

const { port } = require('./config/constants');
const { config } = require('./config/database');
const { products, customers } = require('./config/mock');

const app = express();
const connection = mysql.createConnection(config);
// connection.connect();

// globals
global.isAdmin = false;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('pages/home', {
    products,
  });
});

app.get('/admin', (req, res) => {
  res.render('pages/admin', {
    isAdmin: true,
    products,
  });
});

app.get('/services', (req, res) => {
  res.render('pages/services');
});

app.get('/customers', (req, res) => {
  res.render('pages/customers', {
    isAdmin: true,
    customers,
  });
});

app.post('/products', (req, res) => {
  // ...
});

app.get('/products/:id', (req, res) => {
  // ...
});

app.listen(port, () => {
  console.debug(`server started at http://localhost:${port}`);
});