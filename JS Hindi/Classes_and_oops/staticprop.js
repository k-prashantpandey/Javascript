class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId() {
        return `123`
    }
}
const hitesh = new User("hitesh");
// console.log(hitesh.createId());   // ERROR: static can't access.



class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email;
    }
}
const iphone = new Teacher("iphone", "iphone@gmail.com");
iphone.logMe();
// console.log(iphone.createId());   // ERROR: static can't access by child or parent.