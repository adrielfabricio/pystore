const products = [
  {
    id: 1,
    name: 'T-shirt Python',
    description: 'Uma camiseta confortável e estilosa com o logotipo do Python.',
    price: 20,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 20,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 2,
    name: 'Caneca Python',
    description: 'Uma caneca de cerâmica com o logotipo do Python.',
    price: 20,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 15,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 3,
    name: 'Casaco Python',
    description: 'Um casaco confortável e estiloso com o logotipo do Python.',
    price: 50,
    category: 'Vestuário',
    status: 'Em estoque',
    stock: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 4,
    name: 'Programa Python',
    description: 'Um livro com instruções sobre programação em Python.',
    price: 30,
    category: 'Livros',
    status: 'Em estoque',
    stock: 7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 5,
    name: 'Mouse Python',
    description: 'Um mouse de computador tematizado com o logo do Python.',
    price: 15,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 10,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 6,
    name: 'Boné Python',
    description: 'Um boné estiloso com o logotipo do Python.',
    price: 10,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 13,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 7,
    name: 'Chaveiro Python',
    description: 'Um chaveiro com o emblema do Python.',
    price: 5,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 50,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 8,
    name: 'Mochila Python',
    description: 'Uma mochila espaçosa com o logotipo do Python.',
    price: 40,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 23,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 9,
    name: 'Mousepad Python',
    description: 'Um mousepad grande com design do Python.',
    price: 8,
    category: 'Acessórios',
    status: 'Em estoque',
    stock: 11,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
  {
    id: 10,
    name: 'Camiseta Python 2.0',
    description: 'Uma versão atualizada da camiseta Python.',
    price: 25,
    category: 'Vestuário',
    status: 'Em estoque',
    stock: 19,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
  },
];

const customers = [
  {
    id: 1,
    nome: 'Alice',
    email: 'alice@example.com',
    senha: 'senha1',
    endereco: 'Rua A, 123',
    cep: '12345-678',
    tipo_usuario_id: 1,
  },
  {
    id: 2,
    nome: 'Bob',
    email: 'bob@example.com',
    senha: 'senha2',
    endereco: 'Rua B, 456',
    cep: '23456-789',
    tipo_usuario_id: 2,
  },
  {
    id: 3,
    nome: 'Carol',
    email: 'carol@example.com',
    senha: 'senha3',
    endereco: 'Rua C, 789',
    cep: '34567-890',
    tipo_usuario_id: 1,
  },
  {
    id: 4,
    nome: 'David',
    email: 'david@example.com',
    senha: 'senha4',
    endereco: 'Rua D, 1011',
    cep: '45678-901',
    tipo_usuario_id: 2,
  },
  {
    id: 5,
    nome: 'Eva',
    email: 'eva@example.com',
    senha: 'senha5',
    endereco: 'Rua E, 1213',
    cep: '56789-012',
    tipo_usuario_id: 1,
  },
  {
    id: 6,
    nome: 'Frank',
    email: 'frank@example.com',
    senha: 'senha6',
    endereco: 'Rua F, 1415',
    cep: '67890-123',
    tipo_usuario_id: 2,
  },
  {
    id: 7,
    nome: 'Grace',
    email: 'grace@example.com',
    senha: 'senha7',
    endereco: 'Rua G, 1617',
    cep: '78901-234',
    tipo_usuario_id: 1,
  },
  {
    id: 8,
    nome: 'Henry',
    email: 'henry@example.com',
    senha: 'senha8',
    endereco: 'Rua H, 1819',
    cep: '89012-345',
    tipo_usuario_id: 2,
  },
  {
    id: 9,
    nome: 'Isabel',
    email: 'isabel@example.com',
    senha: 'senha9',
    endereco: 'Rua I, 2021',
    cep: '90123-456',
    tipo_usuario_id: 1,
  },
  {
    id: 10,
    nome: 'Jack',
    email: 'jack@example.com',
    senha: 'senha10',
    endereco: 'Rua J, 2223',
    cep: '01234-567',
    tipo_usuario_id: 2,
  },
];

module.exports = {
	products,
  customers,
}