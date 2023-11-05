const Product = require('../model/Product.js');
const database = require('../config/database.js');

// CREATE (Create a new product)
function create(product) {
  const params = [
    product.getName(),
    product.getDescription(),
    product.getPrice(),
    product.getStock(),
    product.getImage(),
    product.getCategory_id(),
  ];
  let sql =
    'INSERT INTO products (name, description, price, stock, image, category_id) VALUES (?, ?, ?, ?, ?, ?)';
  database.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log('Product created successfully. Product ID: ' + result.insertId);
  });
}

// READ (Retrieve a product by ID)
async function retrieve(id) {
  var sql = `SELECT products.*, product_category.name AS category FROM products INNER JOIN product_category ON products.category_id = product_category.id WHERE products.id = ${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
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
      resolve(product);
    });
  });
}

// UPDATE (Update a product by ID)
function update(product) {
  let id = product.getId();
  let name = product.getName();
  let description = product.getDescription();
  let price = product.getPrice();
  let stock = product.getStock();
  let image = product.getImage();
  let category_id = product.getCategory_id();

  var sql =
    'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, image = ?, category_id = ? WHERE id = ?';
  database.query(
    sql,
    [name, description, price, stock, image, category_id, id],
    function (err, result) {
      if (err) throw err;
      console.log(
        'Product updated successfully. Records updated: ' + result.affectedRows,
      );
    },
  );
}

// DELETE (Delete a product by ID)
function destroy(id) {
  var sql = 'DELETE FROM products WHERE id = ?';
  database.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log(
      'Product deleted successfully. Records deleted: ' + result.affectedRows,
    );
  });
}

// LIST ALL (Retrieve all products)
async function list_all() {
  let product_list = [];
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT products.*, product_category.name AS category FROM products INNER JOIN product_category ON products.category_id = product_category.id',
      async function (error, collection) {
        for (let item of collection) {
          let product = new Product(
            item.id,
            item.name,
            item.description,
            item.price,
            item.stock,
            item.image,
            item.category_id,
            item.category,
          );
          product_list.push(product);
        }
        resolve(product_list);
      },
    );
  });
}

// LIST BY CATEGORY (Retrieve products by category ID)
async function list_by_category(category_id) {
  let product_list = [];
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT products.*, product_category.name AS category FROM products INNER JOIN product_category ON products.category_id = product_category.id WHERE products.category_id = ?',
      [category_id],
      async function (error, collection) {
        for (const item of collection) {
          let product = new Product(
            item.id,
            item.name,
            item.description,
            item.price,
            item.stock,
            item.image,
            item.category_id,
            item.category,
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
