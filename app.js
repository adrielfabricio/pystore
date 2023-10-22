const express = require('express');
const bodyParser = require('body-parser');

// Importe os modelos e controladores
const Produto = require('./model/Produto');
const CategoriaProduto = require('./model/CategoriaProduto');

const produtoController = require('./controllers/produto_controller'); 
const categoriaController = require('./controllers/categoria_controller'); 


const { port } = require('./config/constants');

const app = express();
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// home page (list all products)
app.get('/', async function(req, res){
  let products = new Array();
  products = await produtoController.list_all();
  res.render('pages/home', {
    products: products,
  });
});

app.get('/category/:id', async function(req, res) {
  const categoryId = req.params.id;
  let products = new Array();
  products = await produtoController.list_by_category(categoryId)
  res.render('pages/home', {
    products: products,
  });
});

// Admin page (list all products and categories)
app.get('/admin', async function(req, res){
  let products = new Array();
  products = await produtoController.list_all();
  res.render('pages/admin', {
    products: products,
  });
});

// do nothing
app.get('/services', (req, res) => {
  res.render('pages/services');
});

// create product
app.post('/admin/products', (req, res) => {
  const { nome, descricao, preco, estoque, imagem, categoria_id } = req.body;
  const produto = new Produto(0, nome, descricao, preco, estoque, imagem, categoria_id);

  produtoController.create(produto, (result) => {
    if (result) {
      res.status(201).json({ message: 'Produto criado com sucesso' });
    } else {
      res.status(500).json({ message: 'Erro ao criar o produto' });
    }
  });
});

// product details
app.get('/products/:id', async function (req, res) {
    produto = await produtoController.retrieve(req.params.id);
    res.render('pages/products/:id', {
      product: produto,
    });
});

// destroy product
app.delete('/admin/products/:id', (req, res) => {
  const productId = req.body.id;
  produtoController.destroy(productId, (result) => {
    // Lógica para lidar com o resultado da exclusão do produto
    if (result) {
      res.status(200).json({ message: 'Produto excluído com sucesso' });
    } else {
      res.status(500).json({ message: 'Erro ao excluir o produto' });
    }
  });
});

// update product
app.put('/admin/products/:id', (req, res) => {
  const { id, nome, descricao, preco, estoque, imagem, categoria_id } = req.body;
  const produto = new Produto(id, nome, descricao, preco, estoque, imagem, categoria_id);

  produtoController.update(produto, (result) => {
    if (result) {
      res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } else {
      res.status(500).json({ message: 'Erro ao atualizar o produto' });
    }
  });
});

app.post('/admin/categories', (req, res) => {
  const { nome } = req.body;
  const categoria = new CategoriaProduto(0, nome);

  categoriaController.create(categoria, (result) => {
    if (result) {
      res.status(201).json({ message: 'Categoria criada com sucesso' });
    } else {
      res.status(500).json({ message: 'Erro ao criar a categoria' });
    }
  });
});

// destroy category
app.delete('/admin/categories/:id', (req, res) => {
  const categoryId = req.body.id;

  categoriaController.destroy(categoryId, (result) => {
    // Lógica para lidar com o resultado da exclusão da categoria
    if (result) {
      res.status(200).json({ message: 'Categoria excluída com sucesso' });
    } else {
      res.status(500).json({ message: 'Erro ao excluir a categoria' });
    }
  });
});

app.listen(port, () => {
  console.debug(`server started at http://localhost:${port}`);
});