const CategoriaProduto = require('../model/CategoriaProduto.js');
const db = require('./db.js');

// CREATE (Cria uma nova categoria de produto)
function create(categoria) {
  const params = [categoria.getNome()];
  let sql = 'INSERT INTO categoria_produto (nome) VALUES (?)';
  db.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log('Categoria de produto criada com sucesso. ID da categoria: ' + result.insertId);
  });
}

// READ (Recupera uma categoria de produto pelo ID)
async function retrieve(id) {
  var sql = `SELECT * FROM categoria_produto WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    db.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const categoria = new CategoriaProduto(item.id, item.nome);
      resolve(categoria);
    });
  });
}

// UPDATE (Atualiza uma categoria de produto pelo ID)
function update(categoria) {
  let id = categoria.getId();
  let nome = categoria.getNome();
  var sql = 'UPDATE categoria_produto SET nome = ? WHERE id = ?';
  db.query(sql, [nome, id], function (err, result) {
    if (err) throw err;
    console.log('Categoria de produto atualizada com sucesso. Registros atualizados: ' + result.affectedRows);
  });
}

// DELETE (Exclui uma categoria de produto pelo ID)
function destroy(id) {
  var sql = 'DELETE FROM categoria_produto WHERE id = ?';
  db.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log('Categoria de produto excluída com sucesso. Registros excluídos: ' + result.affectedRows);
  });
}

// LIST ALL (Recupera todas as categorias de produtos)
async function list_all() {
  let category_list = [];
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM categoria_produto', async function (error, collection) {
      for (const item of collection) {
        let category = new CategoriaProduto(item.id, item.nome);
        category_list.push(category);
      }
      resolve(category_list);
    });
  });
}

module.exports = {
  create: create,
  retrieve: retrieve,
  update: update,
  destroy: destroy,
  list_all: list_all,
};
