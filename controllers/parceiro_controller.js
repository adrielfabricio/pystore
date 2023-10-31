const Parceiro = require('../model/Parceiro.js');
const db = require('./db.js');

// CREATE (Cria um novo parceiro)
function create(parceiro) {
  const params = [
    parceiro.getNome(),
    parceiro.getWebsite(),
    parceiro.getContato(),
  ];
  let sql = 'INSERT INTO parceiros (nome, website, contato) VALUES (?, ?, ?)';
  db.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log(
      'Parceiro criado com sucesso. ID do parceiro: ' + result.insertId,
    );
  });
}

// READ (Recupera um parceiro pelo ID)
async function retrieve(id) {
  var sql = `SELECT * FROM parceiros WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    db.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const parceiro = new Parceiro(
        item.id,
        item.nome,
        item.website,
        item.contato,
      );
      resolve(parceiro);
    });
  });
}

// UPDATE (Atualiza um parceiro pelo ID)
function update(parceiro) {
  let id = parceiro.getId();
  let nome = parceiro.getNome();
  let website = parceiro.getWebsite();
  let contato = parceiro.getContato();
  var sql =
    'UPDATE parceiros SET nome = ?, website = ?, contato = ? WHERE id = ?';
  db.query(sql, [nome, website, contato, id], function (err, result) {
    if (err) throw err;
    console.log(
      'Parceiro atualizado com sucesso. Registros atualizados: ' +
        result.affectedRows,
    );
  });
}

// DELETE (Exclui um parceiro pelo ID)
function destroy(id) {
  var sql = 'DELETE FROM parceiros WHERE id = ?';
  db.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log(
      'Parceiro excluído com sucesso. Registros excluídos: ' +
        result.affectedRows,
    );
  });
}

// LIST ALL (Recupera todos os parceiros)
async function list_all() {
  let parceiro_list = [];
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM parceiros', async function (error, collection) {
      for (const item of collection) {
        let parceiro = new Parceiro(
          item.id,
          item.nome,
          item.website,
          item.contato,
        );
        parceiro_list.push(parceiro);
      }
      resolve(parceiro_list);
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
