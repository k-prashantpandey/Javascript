class User {
    constructor(username, email, password) {
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}
const tea = new Teacher("prashant", "chai@gmail.com", "1234");
const masalaChai = new User("masalaChai");
tea.addCourse();
console.log(tea);
masalaChai.logMe();
console.log(tea instanceof User);