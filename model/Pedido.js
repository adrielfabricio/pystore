class Pedido {
    constructor(id, cliente_id, data, status, valor, produtos) {
      this.id = id;
      this.cliente_id = cliente_id;
      this.data = data;
      this.status = status;
      this.valor = valor;
      this.produtos = produtos; // Um array de produtos no pedido
    }
  
    getId() {
      return this.id;
    }
    setId(value) {
      this.id = value;
    }
    getClienteId() {
      return this.cliente_id;
    }
    setClienteId(value) {
      this.cliente_id = value;
    }
    getData() {
      return this.data;
    }
    setData(value) {
      this.data = value;
    }
    getStatus() {
      return this.status;
    }
    setStatus(value) {
      this.status = value;
    }
    getValor() {
      return this.valor;
    }
    setValor(value) {
      this.valor = value;
    }
    getProdutos() {
      return this.produtos;
    }
    setProdutos(value) {
      this.produtos = value;
    }
  }
  
  module.exports = Pedido;
  