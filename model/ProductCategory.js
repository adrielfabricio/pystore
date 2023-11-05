class ProductCategory {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    getId(){
        return this.id;
    }
    setId(value){
        this.id = value
    }
    getName(){
        return this.name;
    }
    setName(value){
        this.name = value
    }
}

module.exports = ProductCategory;
