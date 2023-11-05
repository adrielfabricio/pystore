const ProductCategory = require('../model/ProductCategory.js');
const Partner = require('../model/Partner.js');
const Orders = require('../model/Order.js');
const Product = require('../model/Product.js');
const UserType = require('../model/UserType.js');
const User = require('../model/User.js');
const database = require('../config/database.js');

// List
async function list_all() {
  let user_list = [];
  return new Promise((resolve, reject) => {
    database.query(
      'SELECT users.*, user_type.name AS type FROM users INNER JOIN user_type ON users.user_type_id = user_type.id;',
      async function (error, collection) {
        for (const item of collection) {
          let user = new User();
          user.setId(item.id);
          user.setName(item.name);
          user.setEmail(item.email);
          user.setPassword(item.password);
          user.setAddress(item.address);
          user.setZipCode(item.zip_code);
          user.setUserTypeId(item.user_type_id);
          user.setType(item.type);

          user_list.push(user);
        }
        resolve(user_list);
      },
    );
  });
}

// POST
function create(user) {
  const params = [
    user.getName(),
    user.getEmail(),
    user.getPassword(),
    user.getAddress(),
    user.getZipCode(),
    user.getUserTypeId(),
  ];
  let sql =
    'INSERT INTO users (name, email, password, address, zip_code, user_type_id) VALUES (?, ?, ?, ?, ?, ?)';
  database.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
}

// Retrieve
async function retrieve(id) {
  var sql = `SELECT users.*, user_type.name AS type FROM users INNER JOIN user_type ON users.user_type_id = user_type.id WHERE users.id = ${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, async function (err, result) {
      if (err) throw err;
      const item = result[0];
      const user = new User(
        item.id,
        item.name,
        item.email,
        item.password,
        item.address,
        item.zip_code,
        item.user_type_id,
        item.type,
      );
      resolve(user);
    });
  });
}

// UPDATE
function update(user) {
  let id = user.getId();
  let name = user.getName();
  let email = user.getEmail();
  let password = user.getPassword();
  let address = user.getAddress();
  let zip_code = user.getZipCode();
  let user_type_id = user.getUserTypeId();

  var sql =
    'UPDATE users SET name = ?, email = ?, password = ?, address = ?, zip_code = ?, user_type_id = ? WHERE id = ?';
  database.query(
    sql,
    [name, email, password, address, zip_code, user_type_id, id],
    async function (err, result) {
      if (err) throw err;
      console.log('Number of records updated: ' + result.affectedRows);
    },
  );
}

// Delete
function destroy(id) {
  var sql = 'DELETE FROM users WHERE id = ?';
  database.query(sql, [id], function (err, result) {
    if (err) throw err;
    console.log('Number of records deleted: ' + result.affectedRows);
  });
}

module.exports = {
  list_all: list_all,
  create: create,
  update: update,
  retrieve: retrieve,
  destroy: destroy,
};
