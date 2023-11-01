const Pedido = require('../model/Pedido.js');
const database = require('../config/database.js');

// CREATE (Cria um novo pedido)
function create(pedido) {
  const params = [
    pedido.getClienteId(),
    pedido.getData(),
    pedido.getStatus(),
    pedido.getValor(),
  ];
  let sql =
    'INSERT INTO pedidos (cliente_id, data, status, valor) VALUES (?, ?, ?, ?)';
  database.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log('Pedido criado com sucesso. ID do pedido: ' + result.insertId);

    // Após a criação do pedido, adicione os produtos associados a ele na tabela produtos_pedidos
    const pedidoId = result.insertId;
    const produtos = pedido.getProdutos();
    for (const produto of produtos) {
      const produtoId = produto.id;
      const quantidade = produto.quantidade;
      let produtosPedidosSql =
        'INSERT INTO produtos_pedidos (pedido_id, produto_id, quantidade) VALUES (?, ?, ?)';
      database.query(
        produtosPedidosSql,
        [pedidoId, produtoId, quantidade],
        function (err, result) {
          if (err) throw err;
          console.log(
            'Produto adicionado ao pedido. Pedido ID: ' +
              pedidoId +
              ', Produto ID: ' +
              produtoId,
          );
        },
      );
    }
  });
}

// READ (Recupera um pedido pelo ID)
async function retrieve(id) {
  var sql = `SELECT * FROM pedidos WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const pedido = new Pedido(
        item.id,
        item.cliente_id,
        item.data,
        item.status,
        item.valor,
        [],
      );

      // Recupere os produtos associados a este pedido na tabela produtos_pedidos
      let produtosSql = `SELECT produtos.*, produtos_pedidos.quantidade
        FROM produtos_pedidos
        INNER JOIN produtos ON produtos_pedidos.produto_id = produtos.id
        WHERE produtos_pedidos.pedido_id = ${id}`;

      database.query(produtosSql, async function (err, produtosResult) {
        if (err) throw err;
        const produtos = [];
        for (const produtoItem of produtosResult) {
          const produto = {
            id: produtoItem.id,
            nome: produtoItem.nome,
            descricao: produtoItem.descricao,
            preco: produtoItem.preco,
            estoque: produtoItem.estoque,
            imagem: produtoItem.imagem,
            categoria_id: produtoItem.categoria_id,
            quantidade: produtoItem.quantidade,
          };
          produtos.push(produto);
        }
        pedido.setProdutos(produtos);
        resolve(pedido);
      });
    });
  });
}

// UPDATE (Atualiza um pedido pelo ID)
function update(pedido) {
  let id = pedido.getId();
  let cliente_id = pedido.getClienteId();
  let data = pedido.getData();
  let status = pedido.getStatus();
  let valor = pedido.getValor();
  var sql =
    'UPDATE pedidos SET cliente_id = ?, data = ?, status = ?, valor = ? WHERE id = ?';
  database.query(sql, [cliente_id, data, status, valor, id], function (err, result) {
    if (err) throw err;
    console.log(
      'Pedido atualizado com sucesso. Registros atualizados: ' +
        result.affectedRows,
    );
  });
}

// DELETE (Exclui um pedido pelo ID)
function destroy(id) {
  var sql = 'DELETE FROM pedidos WHERE id = ?';
  database.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log(
      'Pedido excluído com sucesso. Registros excluídos: ' +
        result.affectedRows,
    );

    // Também exclua os produtos associados a este pedido na tabela produtos_pedidos
    var produtosPedidosSql = 'DELETE FROM produtos_pedidos WHERE pedido_id = ?';
    database.query(produtosPedidosSql, [id], function (err, result) {
      if (err) throw err;
      console.log(
        'Produtos associados ao pedido também foram excluídos. Registros excluídos: ' +
          result.affectedRows,
      );
    });
  });
}

// LIST ALL (Recupera todos os pedidos)
async function list_all() {
  let pedido_list = [];
  return new Promise((resolve, reject) => {
    database.query('SELECT * FROM pedidos', async function (error, collection) {
      for (const item of collection) {
        let pedido = new Pedido(
          item.id,
          item.cliente_id,
          item.data,
          item.status,
          item.valor,
          [],
        );

        // Recupere os produtos associados a este pedido na tabela produtos_pedidos
        let produtosSql = `SELECT produtos.*, produtos_pedidos.quantidade
          FROM produtos_pedidos
          INNER JOIN produtos ON produtos_pedidos.produto_id = produtos.id
          WHERE produtos_pedidos.pedido_id = ${item.id}`;

        database.query(produtosSql, async function (err, produtosResult) {
          if (err) throw err;
          const produtos = [];
          for (const produtoItem of produtosResult) {
            const produto = {
              id: produtoItem.id,
              nome: produtoItem.nome,
              descricao: produtoItem.descricao,
              preco: produtoItem.preco,
              estoque: produtoItem.estoque,
              imagem: produtoItem.imagem,
              categoria_id: produtoItem.categoria_id,
              quantidade: produtoItem.quantidade,
            };
            produtos.push(produto);
          }
          pedido.setProdutos(produtos);
          pedido_list.push(pedido);
        });
      }
      resolve(pedido_list);
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
