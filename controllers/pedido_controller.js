const Order = require('../model/Order.js');
const database = require('../config/database.js');

// CREATE (Create a new order)
function create(order) {
  const params = [
    order.getCustomerId(),
    order.getDate(),
    order.getStatus(),
    order.getValue(),
  ];
  let sql =
    'INSERT INTO orders (customer_id, date, status, value) VALUES (?, ?, ?, ?)';
  database.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log('Order created successfully. Order ID: ' + result.insertId);

    // After creating the order, add the associated products to the products_orders table
    const orderId = result.insertId;
    const products = order.getProducts();
    for (const product of products) {
      const productId = product.id;
      const quantity = product.quantity;
      let productsOrdersSql =
        'INSERT INTO products_orders (order_id, product_id, quantity) VALUES (?, ?, ?)';
      database.query(
        productsOrdersSql,
        [orderId, productId, quantity],
        function (err, result) {
          if (err) throw err;
          console.log(
            'Product added to the order. Order ID: ' +
              orderId +
              ', Product ID: ' +
              productId,
          );
        },
      );
    }
  });
}

// READ (Retrieve an order by ID)
async function retrieve(id) {
  var sql = `SELECT * FROM orders WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const order = new Order(
        item.id,
        item.customer_id,
        item.date,
        item.status,
        item.value,
        [],
      );

      // Retrieve the products associated with this order in the products_orders table
      let productsSql = `SELECT products.*, products_orders.quantity
        FROM products_orders
        INNER JOIN products ON products_orders.product_id = products.id
        WHERE products_orders.order_id = ${id}`;

      database.query(productsSql, async function (err, productsResult) {
        if (err) throw err;
        const products = [];
        for (const productItem of productsResult) {
          const product = {
            id: productItem.id,
            name: productItem.name,
            description: productItem.description,
            price: productItem.price,
            stock: productItem.stock,
            image: productItem.image,
            category_id: productItem.category_id,
            quantity: productItem.quantity,
          };
          products.push(product);
        }
        order.setProducts(products);
        resolve(order);
      });
    });
  });
}

// UPDATE (Update an order by ID)
function update(order) {
  let id = order.getId();
  let customer_id = order.getCustomerId();
  let date = order.getDate();
  let status = order.getStatus();
  let value = order.getValue();
  var sql =
    'UPDATE orders SET customer_id = ?, date = ?, status = ?, value = ? WHERE id = ?';
  database.query(sql, [customer_id, date, status, value, id], function (err, result) {
    if (err) throw err;
    console.log(
      'Order updated successfully. Records updated: ' + result.affectedRows,
    );
  });
}

// DELETE (Delete an order by ID)
function destroy(id) {
  var sql = 'DELETE FROM orders WHERE id = ?';
  database.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log(
      'Order deleted successfully. Records deleted: ' + result.affectedRows,
    );

    // Also delete the products associated with this order in the products_orders table
    var productsOrdersSql = 'DELETE FROM products_orders WHERE order_id = ?';
    database.query(productsOrdersSql, [id], function (err, result) {
      if (err) throw err;
      console.log(
        'Products associated with the order were also deleted. Records deleted: ' +
          result.affectedRows,
      );
    });
  });
}

// LIST ALL (Retrieve all orders)
async function list_all() {
  let order_list = [];
  return new Promise((resolve, reject) => {
    database.query('SELECT * FROM orders', async function (error, collection) {
      for (const item of collection) {
        let order = new Order(
          item.id,
          item.customer_id,
          item.date,
          item.status,
          item.value,
          [],
        );

        // Retrieve the products associated with this order in the products_orders table
        let productsSql = `SELECT products.*, products_orders.quantity
          FROM products_orders
          INNER JOIN products ON products_orders.product_id = products.id
          WHERE products_orders.order_id = ${item.id}`;

        database.query(productsSql, async function (err, productsResult) {
          if (err) throw err;
          const products = [];
          for (const productItem of productsResult) {
            const product = {
              id: productItem.id,
              name: productItem.name,
              description: productItem.description,
              price: productItem.price,
              stock: productItem.stock,
              image: productItem.image,
              category_id: productItem.category_id,
              quantity: productItem.quantity,
            };
            products.push(product);
          }
          order.setProducts(products);
          order_list.push(order);
        });
      }
      resolve(order_list);
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
