class Produto {
    constructor(id, name, description, price, stock, image, category_id, category){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.category_id = category_id;
        this.category = category;
    }

    getId(){
        return this.id;
    }
    setId(value){
        this.id = value
    }
    getNome(){
        return this.name;
    }
    setNome(value){
        this.name = value
    }
    getDescricao(){
        return this.description;
    }
    setDescricao(value){
        this.description = value
    }
    getPreco(){
        return this.price;
    }
    setPreco(value){
        this.price = value
    }
    getEstoque(){
        return this.stock;
    }
    setEstoque(value){
        this.stock = value
    }
    getImagem(){
        return this.image;
    }
    setImagem(value){
        this.image = value
    }
    getCategoria_id(){
        return this.category_id;
    }
    setCategoria_id(value){
        this.category_id = value
    }
    getCategoria(){
        return this.category;
    }
    setCategoria(value){
        this.category = value
    }
}

module.exports = Produto;