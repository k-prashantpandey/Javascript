// Object literal

const User = {
    userName: "Prashant",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.userName}`);
    }
}
// console.log(User.userName);
// console.log(User.getUserDetails());
// console.log(userName);


// **********Constructor function********** => new keyword is a constructor function.
function user (username, logginCount, isLoggedIn) {
    this.username = username;
    this.logginCount = logginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new user("Prashant", 10, true);
const userTwo = new user("Rajesh", 11, false);
// console.log(userOne);
// console.log(userTwo);



function multiplyBy5 (num) {
    return num*5;
}
multiplyBy5.power =2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);



function createUser (username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}
const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);

chai.printMe();
tea.printMe();