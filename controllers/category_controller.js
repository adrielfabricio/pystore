const ProductCategory = require('../model/ProductCategory.js');
const database = require('../config/database.js');

// CREATE (Create a new product category)
function create(category) {
  const params = [category.getName()];
  let sql = 'INSERT INTO product_category (name) VALUES (?)';
  database.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log(
      'Product category created successfully. Category ID: ' +
        result.insertId,
    );
  });
}

// READ (Retrieve a product category by ID)
async function retrieve(id) {
  var sql = `SELECT * FROM product_category WHERE id = ${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const category = new ProductCategory(item.id, item.name);
      resolve(category);
    });
  });
}

// UPDATE (Update a product category by ID)
function update(category) {
  let id = category.getId();
  let name = category.getName();
  var sql = 'UPDATE product_category SET name = ? WHERE id = ?';
  database.query(sql, [name, id], function (err, result) {
    if (err) throw err;
    console.log(
      'Product category updated successfully. Records updated: ' +
        result.affectedRows,
    );
  });
}

// DELETE (Delete a product category by ID)
function destroy(id) {
  var sql = 'DELETE FROM product_category WHERE id = ?';
  database.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log(
      'Product category deleted successfully. Records deleted: ' +
        result.affectedRows,
    );
  });
}

// LIST ALL (Retrieve all product categories)
async function list_all() {
  let category_list = [];
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT * FROM product_category',
      async function (error, collection) {
        for (const item of collection) {
          let category = new ProductCategory(item.id, item.name);
          category_list.push(category);
        }
        resolve(category_list);
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
};
