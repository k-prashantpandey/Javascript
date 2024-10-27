// #premitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 2384875655633n




//Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "superheros",
    age: 56,
}

const myfunction = function(){
    console.log("hello world");
    
}

// console.log(typeof bigNumber);
// console.log(typeof myfunction);
// console.log(typeof anotherId);
// console.log(heros);



//*********************************************************
// Stack (primitive),
// Heap (non-primitive)

let myYoutubename = "hiteshdotcom"
let anotherName = myYoutubename
anotherName = "chaiaurcode"
// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    Email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
//console.log(userTwo);


userTwo.Email = "hitesh@google.com"

console.log(userOne.Email);
console.log(userTwo.Email);

