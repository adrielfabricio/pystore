class Parceiro {
    constructor(id, nome, website, contato){
        this.id = id;
        this.nome = nome;
        this.website = website;
        this.contato = contato;
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
    getWebsite(){
        return this.website;
    }
    setWebsite(value){
        this.website = value
    }
    getContato(){
        return this.contato;
    }
    setContato(value){
        this.contato = value
    }
}

module.exports = Parceiro;