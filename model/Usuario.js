class Usuario {
    constructor(id, nome, email, senha, endereco, cep, tipo_usuario_id, tipo){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.cep = cep;
        this.tipo_usuario_id = tipo_usuario_id;
        this.tipo = tipo;
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
    getEmail(){
        return this.email;
    }
    setEmail(value){
        this.email = value
    }
    getSenha(){
        return this.senha;
    }
    setSenha(value){
        this.senha = value
    }
    getEndereco(){
        return this.endereco;
    }
    setEndereco(value){
        this.endereco = value
    }
    getCep(){
        return this.cep;
    }
    setCep(value){
        this.cep = value
    }
    getTipo_usuario_id(){
        return this.tipo_usuario_id;
    }
    setTipo_usuario_id(value){
        this.tipo_usuario_id = value
    }
    getTipo(){
        return this.tipo;
    }
    setTipo(value){
        this.tipo = value
    }
}

module.exports = Usuario;