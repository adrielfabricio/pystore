const Produto = require('../model/Produto.js');
const database = require('../config/database.js');

// CREATE (Cria um novo produto)
function create(produto) {
  const params = [
    produto.getNome(),
    produto.getDescricao(),
    produto.getPreco(),
    produto.getEstoque(),
    produto.getImagem(),
    produto.getCategoria_id(),
  ];
  let sql =
    'INSERT INTO produtos (nome, descricao, preco, estoque, imagem, categoria_id) VALUES (?, ?, ?, ?, ?, ?)';
  database.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log(
      'Produto criado com sucesso. ID do produto: ' + result.insertId,
    );
  });
}

// READ (Recupera um produto pelo ID)
async function retrieve(id) {
  var sql = `SELECT produtos.*, categoria_produto.nome AS categoria FROM produtos INNER JOIN categoria_produto ON produtos.categoria_id = categoria_produto.id WHERE produtos.id = ${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const produto = new Produto(
        item.id,
        item.nome,
        item.descricao,
        item.preco,
        item.estoque,
        item.imagem,
        item.categoria_id,
        item.categoria,
      );
      resolve(produto);
    });
  });
}

// UPDATE (Atualiza um produto pelo ID)
function update(produto) {
  let id = produto.getId();
  let nome = produto.getNome();
  let descricao = produto.getDescricao();
  let preco = produto.getPreco();
  let estoque = produto.getEstoque();
  let imagem = produto.getImagem();
  let categoria_id = produto.getCategoria_id();

  var sql =
    'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ?, imagem = ?, categoria_id = ? WHERE id = ?';
  database.query(
    sql,
    [nome, descricao, preco, estoque, imagem, categoria_id, id],
    function (err, result) {
      if (err) throw err;
      console.log(
        'Produto atualizado com sucesso. Registros atualizados: ' +
          result.affectedRows,
      );
    },
  );
}

// DELETE (Exclui um produto pelo ID)
function destroy(id) {
  var sql = 'DELETE FROM produtos WHERE id = ?';
  database.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log(
      'Produto excluído com sucesso. Registros excluídos: ' +
        result.affectedRows,
    );
  });
}

// LIST ALL (Recupera todos os produtos)
async function list_all() {
  let product_list = [];
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT produtos.*, categoria_produto.nome AS categoria FROM produtos INNER JOIN categoria_produto ON produtos.categoria_id = categoria_produto.id',
      async function (error, collection) {
        for (let item of collection) {
          let product = new Produto(
            item.id,
            item.nome,
            item.descricao,
            item.preco,
            item.estoque,
            item.imagem,
            item.categoria_id,
            item.categoria,
          );
          product_list.push(product);
        }
        resolve(product_list);
      },
    );
  });
}

// LIST BY CATEGORY (Recupera produtos por ID de categoria)
async function list_by_category(category_id) {
  let product_list = [];
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT produtos.*, categoria_produto.nome AS categoria FROM produtos INNER JOIN categoria_produto ON produtos.categoria_id = categoria_produto.id WHERE produtos.categoria_id = ?',
      [category_id],
      async function (error, collection) {
        for (const item of collection) {
          let product = new Produto(
            item.id,
            item.nome,
            item.descricao,
            item.preco,
            item.estoque,
            item.imagem,
            item.categoria_id,
            item.categoria,
          );
          product_list.push(product);
        }
        resolve(product_list);
      },
    );
  });
}

module.exports = {
  create: create,
  retrieve: retrieve,
  update: update,
  destroy: destroy,
  list_all: list_all,
  list_by_category: list_by_category,
};
