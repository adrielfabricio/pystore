class User {
    constructor(id, name, email, password, password_hash, address, zip_code, user_type_id, created_at, updated_at, wallet, type) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.password_hash = password_hash;
        this.address = address;
        this.zip_code = zip_code;
        this.user_type_id = user_type_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.wallet = wallet;
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
    getPasswordHash() {
        return this.password_hash;
    }
    setPasswordHash(value) {
        this.password_hash = value;
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
    getCreatedAt() {
        return this.created_at;
    }
    setCreatedAt(value) {
        this.created_at = value;
    }
    getUpdatedAt() {
        return this.updated_at;
    }
    setUpdatedAt(value) {
        this.updated_at = value;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(value) {
        this.wallet = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
}

module.exports = User;
