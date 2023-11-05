USE db_pystore;

-- Insert user types
INSERT INTO user_type (name) VALUES
  ('admin'),
  ('client');

-- Insert an administrator user
INSERT INTO users (name, email, password, address, zip_code, user_type_id)
VALUES ('Admin', 'admin@example.com', 'adminpassword', 'Admin Street, 123', '12345-678', 1);

-- Insert three clients
INSERT INTO users (name, email, password, address, zip_code, user_type_id)
VALUES
  ('Client 1', 'client1@example.com', 'clientpassword1', 'Client 1 Street, 456', '98765-432', 2),
  ('Client 2', 'client2@example.com', 'clientpassword2', 'Client 2 Street, 789', '54321-876', 2),
  ('Client 3', 'client3@example.com', 'clientpassword3', 'Client 3 Street, 101', '11111-111', 2);

-- Insert six partners
INSERT INTO partners (name, website, email, phone)
VALUES
  ('Partner 1', 'http://www.partner1.com', 'partner1@example.com', '123-456-7890'),
  ('Partner 2', 'http://www.partner2.com', 'partner2@example.com', '987-654-3210'),
  ('Partner 3', 'http://www.partner3.com', 'partner3@example.com', '555-555-5555'),
  ('Partner 4', 'http://www.partner4.com', 'partner4@example.com', '111-222-3333'),
  ('Partner 5', 'http://www.partner5.com', 'partner5@example.com', '777-888-9999'),
  ('Partner 6', 'http://www.partner6.com', 'partner6@example.com', '444-999-2222');

-- Insert product categories
INSERT INTO product_category (name) VALUES
  ('Category 1'),
  ('Category 2'),
  ('Category 3');

-- Insert ten products
INSERT INTO products (name, description, image, price, category_id, stock)
VALUES
  ('Product 1', 'Product 1 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 19.99, 1, 50),
  ('Product 2', 'Product 2 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 24.99, 2, 30),
  ('Product 3', 'Product 3 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 14.99, 1, 60),
  ('Product 4', 'Product 4 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 29.99, 2, 20),
  ('Product 5', 'Product 5 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 9.99, 1, 70),
  ('Product 6', 'Product 6 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 19.99, 2, 40),
  ('Product 7', 'Product 7 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 12.99, 1, 80),
  ('Product 8', 'Product 8 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 39.99, 2, 25),
  ('Product 9', 'Product 9 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 17.99, 1, 55),
  ('Product 10', 'Product 10 Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', 21.99, 2, 35);