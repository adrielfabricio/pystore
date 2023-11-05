class User {
    constructor(id, name, email, password, address, zip_code, user_type_id, type) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.zip_code = zip_code;
        this.user_type_id = user_type_id;
        this.type = type;
    }

    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getEmail() {
        return this.email;
    }
    setEmail(value) {
        this.email = value;
    }
    getPassword() {
        return this.password;
    }
    setPassword(value) {
        this.password = value;
    }
    getAddress() {
        return this.address;
    }
    setAddress(value) {
        this.address = value;
    }
    getZipCode() {
        return this.zip_code;
    }
    setZipCode(value) {
        this.zip_code = value;
    }
    getUserTypeId() {
        return this.user_type_id;
    }
    setUserTypeId(value) {
        this.user_type_id = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
}

module.exports = User;
