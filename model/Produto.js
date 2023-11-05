class Product {
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
        this.id = value;
    }
    getName(){
        return this.name;
    }
    setName(value){
        this.name = value;
    }
    getDescription(){
        return this.description;
    }
    setDescription(value){
        this.description = value;
    }
    getPrice(){
        return this.price;
    }
    setPrice(value){
        this.price = value;
    }
    getStock(){
        return this.stock;
    }
    setStock(value){
        this.stock = value;
    }
    getImage(){
        return this.image;
    }
    setImage(value){
        this.image = value;
    }
    getCategory_id(){
        return this.category_id;
    }
    setCategory_id(value){
        this.category_id = value;
    }
    getCategory(){
        return this.category;
    }
    setCategory(value){
        this.category = value;
    }
}

module.exports = Product;
