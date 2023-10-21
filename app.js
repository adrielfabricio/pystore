const express = require('express');
const app = express();
const port = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  // ...
});

app.listen(port, () => {
  console.debug(`server started at http://localhost:${port}`);
});