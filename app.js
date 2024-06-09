const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// models
const Product = require('./model/Product');
const ProductCategory = require('./model/ProductCategory');
const User = require('./model/User');
// controllers
const productController = require('./controllers/product_controller');
const categoryController = require('./controllers/category_controller');
const clientController = require('./controllers/user_controller');
const authController = require('./controllers/authController.js');
// middlewares
const authenticateToken = require('./middlewares/authMiddleware.js');
// constants
const { port, faqs } = require('./config/constants');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // A pasta onde os arquivos serão armazenados
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use o nome original do arquivo
  },
});
const upload = multer({ storage: storage });

// globals
global.isAdmin = false;
global.cart = [];
global.totalPrice = 0.0;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// Rotas públicas
app.post('/register', authController.register);
app.post('/login', authController.login);


// home page (list all products)
app.get('/', async (req, res) => {
  const products = await productController.list_all();

  res.render('pages/home', {
    products: products.slice(0, 4),
    cart: cart,
    totalPrice: totalPrice,
  });
});


// Rotas protegidas
// Admin page (list all products and categories)
app.get('/admin', authenticateToken, async (req, res) => {
  const products = await productController.list_all();
  const categories = await categoryController.list_all();
  res.render('pages/admin', {
    isAdmin: true,
    products,
    categories,
  });
});

// do nothing
app.get('/services', authenticateToken, (req, res) => {
  res.render('pages/services');
});

// Admin page (list all clients)
app.get('/customers', authenticateToken,async (req, res) => {
  const customers = await clientController.list_all();
  res.render('pages/customers', {
    isAdmin: true,
    customers,
  });
});

app.post('/customers', authenticateToken, (req, res) => {
  const { name, email, address, cep } = req.body;
  const password = name + cep; // Default password
  const password_hash = ''; // Default password hash, adjust as needed
  const user_type_id = 2; // Default user type (client)
  const created_at = new Date();
  const updated_at = new Date();
  const wallet = ''; // Default wallet address, adjust as needed

  const customer = new User(
    null,
    name,
    email,
    password,
    password_hash,
    address,
    cep,
    user_type_id,
    created_at,
    updated_at,
    wallet,
    'client'
  );
  clientController.create(customer);
  res.redirect('/customers');
});

app.put('/customers/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, address, cep } = req.body;

  const password = name + cep; // Default password
  const password_hash = ''; // Default password hash, adjust as needed
  const user_type_id = 2; // Default user type (client)
  const created_at = new Date(); // Presuming you want to update this as well
  const updated_at = new Date(); // Presuming you want to update this as well
  const wallet = ''; // Default wallet address, adjust as needed

  const customer = new User(
    id,
    name,
    email,
    password,
    password_hash,
    address,
    cep,
    user_type_id,
    created_at,
    updated_at,
    wallet,
    'client'
  );
  clientController.update(customer);
  res.redirect('/customers');
});


app.delete('/customers/:id', authenticateToken, (req, res) => {
  const customerId = parseInt(req.params.id);

  clientController.destroy(customerId);
  res.redirect('/customers');
});

// create product
app.post('/products', authenticateToken, upload.single('image'), async (req, res) => {
  const { name, description, price, stock, category } = req.body;
  const file = req.file;
  let image = '';
  if (typeof file != 'undefined') {
    image = file.filename;
  }

  let category_in_db = await categoryController.retrieve_by_name(category);
  if (!category_in_db) {
    new_cat = new ProductCategory(null, category);
    category_in_db = await categoryController.create(new_cat);
  }

  const product = new Product(
    null,
    name,
    description,
    price,
    stock,
    image,
    category_in_db.id,
    category_in_db.name,
  );
  productController.create(product);
  res.redirect('/admin');
});

// destroy product
app.delete('/products/:id', authenticateToken, (req, res) => {
  const productId = parseInt(req.params.id);
  productController.destroy(productId);
  res.redirect('/admin');
});

// update product
app.put('/products/:id', authenticateToken, async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, price, stock, image, category } = req.body;

  let category_in_db = await categoryController.retrieve_by_name(category);
  if (!category_in_db) {
    new_cat = new ProductCategory(null, category);
    category_in_db = await categoryController.create(new_cat);
  }

  const product = new Product(
    id,
    name,
    description,
    price,
    stock,
    image,
    category_in_db.id,
    category_in_db.name,
  );
  productController.update(product);
  res.redirect('/admin');
});

// aux routes
app.get('/add-to-cart/:item', authenticateToken, async (req, res) => {
  const id = parseInt(req.params.item);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
    totalPrice += existingItem.price;
  } else {
    const produto = await productController.retrieve(id);
    if (produto) {
      totalPrice += produto.price;
      cart.push({
        ...produto,
        quantity: 1,
      });
    }
  }
  res.redirect('/shop');
});

app.get('/clear-cart', authenticateToken, (req, res) => {
  cart = [];
  res.redirect('/');
});

// buy route
app.post('/buy', authenticateToken, async (req, res) => {
  for (let item of cart) {
    item.stock = item.stock - item.quantity;
    const product = new Product(
      item.id,
      item.name,
      item.description,
      item.price,
      item.stock,
      item.image,
      item.category_id,
      item.category,
    );
    productController.update(product);
  }
  cart = [];
  res.redirect('/');
});

app.get('/faq', authenticateToken, (req, res) => {
  res.render('pages/faq', {
    faqs,
    cart,
    totalPrice,
  });
});

app.get('/shop', authenticateToken, async (req, res) => {
  const products = await productController.list_all();

  res.render('pages/shop', {
    products,
    cart,
    totalPrice,
  });
});

app.listen(port, () => {
  console.debug(`server started at http://localhost:${port}`);
});

// DROP DATABASE IF EXISTS your_database_name;
