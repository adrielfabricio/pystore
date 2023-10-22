-- Crie o banco de dados se ele não existir
CREATE DATABASE IF NOT EXISTS db_pystore;
USE db_pystore;

-- Tabela de tipos de usuário
CREATE TABLE IF NOT EXISTS tipo_usuario (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Tabela de categoria de produtos
CREATE TABLE IF NOT EXISTS categoria_produto (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(1024) NOT NULL,
  imagem VARCHAR(255) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  categoria_id INT NOT NULL,
  estoque INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (categoria_id) REFERENCES categoria_produto (id)
);

-- Tabela de usuários com endereço simplificado
CREATE TABLE IF NOT EXISTS usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  cep VARCHAR(10) NOT NULL,
  tipo_usuario_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (tipo_usuario_id) REFERENCES tipo_usuario (id)
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS pedidos (
  id INT NOT NULL AUTO_INCREMENT,
  cliente_id INT NOT NULL,
  data DATETIME NOT NULL,
  status VARCHAR(255) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (cliente_id) REFERENCES usuarios (id)
);

-- Tabela de produtos em pedidos
CREATE TABLE IF NOT EXISTS produtos_pedidos (
  pedido_id INT NOT NULL,
  produto_id INT NOT NULL,
  quantidade INT NOT NULL,
  PRIMARY KEY (pedido_id, produto_id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos (id),
  FOREIGN KEY (produto_id) REFERENCES produtos (id)
);

-- Tabela de parceiros
CREATE TABLE IF NOT EXISTS parceiros (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  PRIMARY KEY (id)
);
