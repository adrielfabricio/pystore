class Partner {
    constructor(id, name, website, contact){
        this.id = id;
        this.name = name;
        this.website = website;
        this.contact = contact;
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
    getWebsite(){
        return this.website;
    }
    setWebsite(value){
        this.website = value
    }
    getContact(){
        return this.contact;
    }
    setContact(value){
        this.contact = value
    }
}

module.exports = Partner;
