const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret'; // Mantenha isso em um arquivo de configuração separado e seguro

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(401).redirect('/login');

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(403).redirect('/login');
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
