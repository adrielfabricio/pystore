class Order {
  constructor(id, customer_id, date, status, value, products) {
    this.id = id;
    this.customer_id = customer_id;
    this.date = date;
    this.status = status;
    this.value = value;
    this.products = products; // An array of products in the order
  }

  getId() {
    return this.id;
  }
  setId(value) {
    this.id = value;
  }
  getCustomerId() {
    return this.customer_id;
  }
  setCustomerId(value) {
    this.customer_id = value;
  }
  getDate() {
    return this.date;
  }
  setDate(value) {
    this.date = value;
  }
  getStatus() {
    return this.status;
  }
  setStatus(value) {
    this.status = value;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
  getProducts() {
    return this.products;
  }
  setProducts(value) {
    this.products = value;
  }
}

module.exports = Order;
