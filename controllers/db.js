const mysql = require("mysql");
const conexao = mysql.createConnection({
    host: "localhost",
    database: "db_pystore",
    user: "root",
    password: "",
    port:3306
});

conexao.connect();
module.exports = conexao;