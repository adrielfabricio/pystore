const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User.js');
const database = require('../config/database.js');

const secret = 'your_jwt_secret'; // Mantenha isso em um arquivo de configuração separado e seguro

// Registro de usuário
// TODO: adicionar autorização para o contrato inteligente
async function register(req, res) {
  const { name, email, password, wallet, address, cep } = req.body;
  const password_hash = await bcrypt.hash(password, 10);
  const user_type_id = 2; // Default user type (client)

  const user = new User(
    null,
    name,
    email,
    password,
    password_hash,
    address,
    cep,
    user_type_id,
    new Date(),
    new Date(),
    wallet,
    'client',
  );

  const params = [
    user.getName(),
    user.getEmail(),
    user.getPassword(),
    user.getPasswordHash(),
    user.getAddress(),
    user.getZipCode(),
    user.getUserTypeId(),
    user.getCreatedAt(),
    user.getUpdatedAt(),
    user.getWallet(),
  ];

  let sql =
    'INSERT INTO users (name, email, password, password_hash, address, zip_code, user_type_id, created_at, updated_at, wallet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  database.query(sql, params, function (err, result) {
    if (err) return res.status(500).send(err);
    console.log('1 record inserted');
    
    res.status(201).redirect('/login');
  });
}

// Login de usuário
async function login(req, res) {
  const { email, password } = req.body;

  let sql = 'SELECT * FROM users WHERE email = ?';
  database.query(sql, [email], async function (err, results) {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(401).send('User not found');

    const user = results[0];
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) return res.status(401).send('Invalid password');

    const token = jwt.sign(
      { id: user.id, user_type_id: user.user_type_id },
      secret,
      { expiresIn: '1h' },
    );
    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
    res.cookie('wallet', user.wallet, { httpOnly: true, secure: true, maxAge: 3600000 })
    res.status(201).redirect('/shop');
  });
}

module.exports = {
  register,
  login,
};
