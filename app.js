const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// models
const Produto = require('./model/Produto');
const CategoriaProduto = require('./model/CategoriaProduto');
// controllers
const produtoController = require('./controllers/produto_controller');
const categoriaController = require('./controllers/categoria_controller');
const clienteController = require('./controllers/user_controller');
// constants
const { port } = require('./config/constants');

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
  }
});
const upload = multer({ storage: storage });

// globals
global.isAdmin = false;
global.cart = [];
global.totalPrice = 0.0;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// home page (list all products)
app.get('/', async function (req, res) {
  const products = await produtoController.list_all();

  res.render('pages/home', {
    products: products,
    cart: cart,
    totalPrice: totalPrice,
  });
});

// Admin page (list all products and categories)
app.get('/admin', async function (req, res) {
  const products = await produtoController.list_all();
  const categories = await categoriaController.list_all();
  res.render('pages/admin', {
    isAdmin: true,
    products,
    categories,
  });
});

// do nothing
app.get('/services', (req, res) => {
  res.render('pages/services');
});

app.get('/customers', async (req, res) => {
  const customers = await clienteController.list_all();
  res.render('pages/customers', {
    isAdmin: true,
    customers,
  });
});

app.post('/customers', (req, res) => {
  const { name, email, address, cep } = req.body;

  // TODO: implementar create na base de dados para o cliente
  // ...

  res.redirect('/customers');
});

app.put('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, address, cep } = req.body;

  // TODO: implementar logica para atualizar user na base dados
  // ...

  res.redirect('/customers');
});

app.delete('/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id);

  // TODO: implementar lógica de delecao de usuario da base de dados
  
  res.redirect('/customers');
});

// create product
app.post('/products', upload.single('image'), (req, res) => {
  const { name, description, price, stock, categoria_id } = req.body;
  const image = req.image;

  // TODO: ajustar codigo de criacao de produtos para os novos nomes
  // ...

  // const produto = new Produto(
  //   0,
  //   nome,
  //   descricao,
  //   preco,
  //   estoque,
  //   imagem,
  //   categoria_id,
  // );

  // produtoController.create(produto, result => {
  //   if (result) {
  //     res.status(201).json({ message: 'Produto criado com sucesso' });
  //   } else {
  //     res.status(500).json({ message: 'Erro ao criar o produto' });
  //   }
  // });

  // redirect
  res.redirect('/admin');
});

// destroy product
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  
  // TODO: revisar logica de exclusao no banco de dados
  // produtoController.destroy(productId, result => {
  //   // Lógica para lidar com o resultado da exclusão do produto
  //   if (result) {
  //     res.status(200).json({ message: 'Produto excluído com sucesso' });
  //   } else {
  //     res.status(500).json({ message: 'Erro ao excluir o produto' });
  //   }
  // });

  res.redirect('/admin');
});

// update product
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, price, stock, image, category_id } =
    req.body;

  // TODO: atualizar logica para atualizacao de produto
  // const produto = new Produto(
  //   id,
  //   nome,
  //   descricao,
  //   preco,
  //   estoque,
  //   imagem,
  //   categoria_id,
  // );

  // produtoController.update(produto, result => {
  //   if (result) {
  //     res.status(200).json({ message: 'Produto atualizado com sucesso' });
  //   } else {
  //     res.status(500).json({ message: 'Erro ao atualizar o produto' });
  //   }
  // });
  res.redirect('/admin');
});

// aux routes
app.get('/add-to-cart/:item', async (req, res) => {
  const id = parseInt(req.params.item);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
    totalPrice += existingItem.price;
  } else {
    const produto = await produtoController.retrieve(id);
    if (produto) {
      totalPrice += produto.price;
      cart.push({
        ...produto,
        quantity: 1,
      });
    }
  }
  res.redirect('/')
});

app.get('/clear-cart', (req, res) => {
  cart = [];
  res.redirect('/');
});

// buy route
app.post('/buy', (req, res) => {
  // TODO: variavel cart pode ser manipulada aqui para enviar os dados para o banco

  // reset data and redirect to home
  cart = [];
  res.redirect('/');
});

app.listen(port, () => {
  console.debug(`server started at http://localhost:${port}`);
});
