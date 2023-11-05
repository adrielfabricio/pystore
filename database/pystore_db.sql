-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS db_pystore;
USE db_pystore;

-- Table of user types
CREATE TABLE IF NOT EXISTS user_type (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Table of product categories
CREATE TABLE IF NOT EXISTS product_category (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(1024) NOT NULL,
  image VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category_id INT NOT NULL,
  stock INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES product_category (id)
);

-- Users table with simplified address
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  user_type_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_type_id) REFERENCES user_type (id)
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  date DATETIME NOT NULL,
  status VARCHAR(255) NOT NULL,
  value DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES users (id)
);

-- Products in orders table
CREATE TABLE IF NOT EXISTS products_orders (
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (order_id, product_id),
  FOREIGN KEY (order_id) REFERENCES orders (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

-- Partners table
CREATE TABLE IF NOT EXISTS partners (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  PRIMARY KEY (id)
);
