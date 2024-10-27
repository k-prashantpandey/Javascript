function setUserName(username) {
 // complex DB calls 
    this.username = username;
    console.log("Username called successfully")
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}
const chai = new createUser("Chai", "chai@example.com", "12345");
console.log(chai);