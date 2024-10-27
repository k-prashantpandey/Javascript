/* 
const user =
{
    userName: "Hitesh",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.userName}, Welcome to website`);
        //console.log(this);
        
        
    }
}

user.welcomeMessage()
user.userName= "Sam"
user.welcomeMessage()

// console.log(this);
 */


/* 
function chai()
{
    let username = "Hitesh"
    //console.log(this.username); // cannot accessable in function this keyword use for objects.
    
}
chai()
 */





// Arrows functions

/* 
// Normal Arrow Function:->

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,5));
 */




/* 
// explisit Arrow Function:->
const addTwo = (num1,num2) => num1 + num2;
console.log(addTwo(3,5));
 */



/* 
// implisit Arrow Function:->
const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,5));
*/



/* 
// under parenthisis
const addTwo = (num1,num2) => ({username: "Hitesh"})
console.log(addTwo(3,5));
 */



