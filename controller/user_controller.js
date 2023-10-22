const CategoriaProduto = require('../model/CategoriaProduto.js');
const Parceiro = require('../model/Parceiro.js');
const Pedidos = require('../model/Pedidos.js');
const Produto = require('../model/Produto.js');
const ProdutosPedidos = require('../model/ProdutosPedidos.js');
const TipoUsuario = require('../model/TipoUsuario.js');
const Usuario = require('../model/Usuario.js');
const db = require('./db.js');

// List
async function list_all() {
  let user_list = [];
  return new Promise((resolve, reject) => {
    db.query('SELECT usuarios.*, tipo_usuario.nome AS tipo FROM usuarios INNER JOIN tipo_usuario ON usuarios.tipo_usuario_id = tipo_usuario.id;', async function (error, collection) {
      for (const item of collection) {
        let user = new Usuario();
        user.setId(item.id);
        user.setNome(item.nome);
        user.setEmail(item.email);
        user.setSenha(item.senha);
        user.setEndereco(item.endereco);
        user.setCep(item.cep);
        user.setTipo_usuario_id(item.tipo_usuario_id);
        user.setTipo(item.tipo);

        user_list.push(user);
      }
      resolve(user_list);
    });
  });
}

// POST
function create(user) {
  const params = [
    user.getNome(),
    user.getEmail(),
    user.getSenha(),
    user.getEndereco(),
    user.getCep(),
    user.getTipo_usuario_id()
  ];
  let sql = 'INSERT INTO usuarios (nome, email, senha, endereco, cep, tipo_usuario_id) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
}

// Retrieve
async function retrieve(id) {
  var sql = `SELECT usuarios.*, tipo_usuario.nome AS tipo FROM usuarios INNER JOIN tipo_usuario ON usuarios.tipo_usuario_id = tipo_usuario.id WHERE usuarios.id = ${id}`;
  return new Promise((resolve, reject) => {
    db.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const user = new Usuario(item.id, item.nome, item.email, item.senha, item.endereco, item.cep, item.tipo_usuario_id, item.tipo);
      resolve(user);
    });
  });
}

// UPDATE
function update(user) {
  let id = user.getId();
  let nome = user.getNome();
  let email = user.getEmail();
  let senha = user.getSenha();
  let endereco = user.getEndereco();
  let cep = user.getCep();
  let tipo_usuario_id = user.getTipo_usuario_id();

  var sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ?, endereco = ?, cep = ?, tipo_usuario_id = ? WHERE id = ?';
  db.query(sql, [nome, email, senha, endereco, cep, tipo_usuario_id, id], async function (err, result) {
    if (err) throw err;
    console.log('Number of records updated: ' + result.affectedRows);
  });
}

// Delete
function destroy(id) {
  var sql = 'DELETE FROM usuarios WHERE id = ?';
  db.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log('Number of records deleted: ' + result.affectedRows);
  });
}

module.exports = {
  list_all: list_all,
  create: create,
  update: update,
  retrieve: retrieve,
  destroy: destroy
};
