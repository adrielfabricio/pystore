# pystore

## O negócio

Pystore é um e-comerce com produtos e acessórios voltados ao público de TI, em especial a comunidade Python. O nosso objetivo é oferecer produtos personálizados e de alta qualidade que não são encontrados no mercado atualmente. Nossa missão é levar itens que os desenvolvedores gostariam de ter, mas que pela dificuldade de encotrar no mercado, acabam desistindo.
Tendo isso em mente, pretendemos oferecer produtos como:

- Camisas, camisetas e casacos de alta qualidade e com estapas variadas
- Copos, garrafinhas de água e canecas com estampas variadas e criativas aludindo a tecnologia, em especial a linguagem Python
- Pôesters e outros itens de decoração de ambiente de trabalho
- Stickers (adesivos) de alta qualidade que sirvam para mesas, computadores e outras partes de um setup de desenvolvedor
- Também buscaremos parcerias com plataformas de ensino de programação, vendendo cupons de descontos, assinaturas e cursos.

## O banco de dados

Dentro desse projeto Node, existe uma pasta chamada 'database', nela contém o código sql usado para criar o banco de dados, além de um arquivo 'populate' com um exemplo de criação de alguns registros para facilitar o uso do site após uma nova configuração

## Para rodar o projeto

### O banco de dados

- Primeiro, instale o MySQL Workbench (SGBD original do projeto) https://dev.mysql.com/downloads/workbench/
- Ou outro SGBD com suporte para MySQL de sua preferencia
- Configure o banco de dados conforme em .env.example
- No SGBD, execute o código SQL do arquivo pystore_db
- Pronto, Banco de dados Criado com sucesso

### O projeto node

- Primeiro é necessário instalar o Nodejs: https://nodejs.org/en/download
- Em seguida, é necessário instalar as dependencias do projeto com o **npm install**
- Agora, renomeei o arquivo '.env.example' para '.env'
- Pro fim, execute o comando **node app.js**
- Pronto, o sistema está funcionando
