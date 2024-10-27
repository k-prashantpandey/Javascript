const User ={
    _email : "H@hitesh.ai",
    _password: "1234",

    get email () {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value
    },

    get password () {
        return this._password.toUpperCase();
    },
    set password(value) {
        this._password = value
    }
}
const chai = Object.create(User);
console.log(chai.email);
console.log(chai.password);
