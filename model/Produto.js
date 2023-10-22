class Produto {
    constructor(id, nome, descricao, preco, estoque, imagem, categoria_id, categoria){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
        this.imagem = imagem;
        this.categoria_id = categoria_id;
        this.categoria = categoria;
    }

    getId(){
        return this.id;
    }
    setId(value){
        this.id = value
    }
    getNome(){
        return this.nome;
    }
    setNome(value){
        this.nome = value
    }
    getDescricao(){
        return this.descricao;
    }
    setDescricao(value){
        this.descricao = value
    }
    getPreco(){
        return this.preco;
    }
    setPreco(value){
        this.preco = value
    }
    getEstoque(){
        return this.estoque;
    }
    setEstoque(value){
        this.estoque = value
    }
    getImagem(){
        return this.imagem;
    }
    setImagem(value){
        this.imagem = value
    }
    getCategoria_id(){
        return this.categoria_id;
    }
    setCategoria_id(value){
        this.categoria_id = value
    }
    getCategoria(){
        return this.categoria;
    }
    setCategoria(value){
        this.categoria = value
    }
}

module.exports = Produto;