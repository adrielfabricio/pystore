class User {
    constructor(id, name, email, password, address, zipCode, userType_id, type) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.zipCode = zipCode;
        this.userType_id = userType_id;
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
        return this.zipCode;
    }
    setZipCode(value) {
        this.zipCode = value;
    }
    getUserType_id() {
        return this.userType_id;
    }
    setUserType_id(value) {
        this.userType_id = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
}

module.exports = User;
