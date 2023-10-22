use db_pystore; 

-- Inserir tipos de usuário
INSERT INTO tipo_usuario (nome) VALUES
  ('admin'),
  ('cliente');

-- Inserir um usuário administrador
INSERT INTO usuarios (nome, email, senha, endereco, cep, tipo_usuario_id)
VALUES ('Admin', 'admin@example.com', 'senhaadmin', 'Rua Admin, 123', '12345-678', 1);

-- Inserir três clientes
INSERT INTO usuarios (nome, email, senha, endereco, cep, tipo_usuario_id)
VALUES
  ('Cliente 1', 'cliente1@example.com', 'senhacliente1', 'Rua Cliente 1, 456', '98765-432', 2),
  ('Cliente 2', 'cliente2@example.com', 'senhacliente2', 'Rua Cliente 2, 789', '54321-876', 2),
  ('Cliente 3', 'cliente3@example.com', 'senhacliente3', 'Rua Cliente 3, 101', '11111-111', 2);

-- Inserir seis parceiros
INSERT INTO parceiros (nome, website, email, telefone)
VALUES
  ('Parceiro 1', 'http://www.parceiro1.com', 'parceiro1@example.com', '123-456-7890'),
  ('Parceiro 2', 'http://www.parceiro2.com', 'parceiro2@example.com', '987-654-3210'),
  ('Parceiro 3', 'http://www.parceiro3.com', 'parceiro3@example.com', '555-555-5555'),
  ('Parceiro 4', 'http://www.parceiro4.com', 'parceiro4@example.com', '111-222-3333'),
  ('Parceiro 5', 'http://www.parceiro5.com', 'parceiro5@example.com', '777-888-9999'),
  ('Parceiro 6', 'http://www.parceiro6.com', 'parceiro6@example.com', '444-999-2222');

-- Inserir categorias de produtos
INSERT INTO categoria_produto (nome) VALUES
  ('Categoria 1'),
  ('Categoria 2'),
  ('Categoria 3');

-- Inserir dez produtos
INSERT INTO produtos (nome, descricao, imagem, preco, categoria_id, estoque)
VALUES
  ('Produto 1', 'Descrição do Produto 1', 'imagem1.jpg', 19.99, 1, 50),
  ('Produto 2', 'Descrição do Produto 2', 'imagem2.jpg', 24.99, 2, 30),
  ('Produto 3', 'Descrição do Produto 3', 'imagem3.jpg', 14.99, 1, 60),
  ('Produto 4', 'Descrição do Produto 4', 'imagem4.jpg', 29.99, 2, 20),
  ('Produto 5', 'Descrição do Produto 5', 'imagem5.jpg', 9.99, 1, 70),
  ('Produto 6', 'Descrição do Produto 6', 'imagem6.jpg', 19.99, 2, 40),
  ('Produto 7', 'Descrição do Produto 7', 'imagem7.jpg', 12.99, 1, 80),
  ('Produto 8', 'Descrição do Produto 8', 'imagem8.jpg', 39.99, 2, 25),
  ('Produto 9', 'Descrição do Produto 9', 'imagem9.jpg', 17.99, 1, 55),
  ('Produto 10', 'Descrição do Produto 10', 'imagem10.jpg', 21.99, 2, 35);
