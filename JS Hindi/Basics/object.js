// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Prashant",
    age : 26,
    [mySym] : "key1",
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser["email"]);
// console.log(jsUser.email);
// console.log(jsUser["mySym"]);
// console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello js User, ${this.name}`); 
    console.log("Hello js User"); 
}
// console.log(jsUser.greeting());




// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Prashant"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularuser = {
    email: "a@google.com",
    fullName: {
        userFullName: {
            firstName: "Prashant",
            lastName: "Kumar",
        }
    }
}

// console.log(regularuser.fullName);

const ob1 = {1: "a", 2: "b"}
const ob2 = {3: "c", 4: "d"}
const ob3 = {5: "e", 6: "f"}

// const ob3 = {ob1, ob2}
// const ob4 = Object.assign({}, ob1, ob2, ob3)
const ob4 = {...ob1, ...ob2, ...ob3}

// console.log(ob4);


const users =  [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "p@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    courseName: "PJS course in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


//JSON

// {
//     "name": "Hitesh",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }


// [
//     {}
//     {}
//     {}
// ]
