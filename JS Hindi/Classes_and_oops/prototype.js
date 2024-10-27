/* const hero = "Thor    "
console.log(heros.length)
console.log(heros.trim().length) */




let heros = ["thor", "spiderman"];
let herosPower = {
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Hitesh = function() {
    console.log(`Hitesh is present in all objects`);
}
Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
}
/* herosPower.Hitesh();
heros.Hitesh();
heros.heyHitesh(); */
// herosPower.heyHitesh(); // can't access



const user = {
    name: "Hitesh",
    email: "chai@example.com"
}
const Teacher = {
    makeVideo: true
}
const teacherSupport = {
    isAvailable: false
}
const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:teacherSupport
}
Teacher.__proto__ = user;

//modern  syntax
Object.setPrototypeOf(teacherSupport, Teacher);
let anotherUserName = "ChaiAurCode";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength();
"Hitesh".trueLength();
"icetea".trueLength();
