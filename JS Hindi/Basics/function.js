/* function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}
sayMyName() */

/* function addTwoNumber(number1 , number2){
    console.log(number1 + number2);
    
}

const result = addTwoNumber(3,4)
console.log("RESULT: ", result); //undefined:-> NO return values */


/* function addTwoNumber(number1,number2){
    // return number1 + number2
    let result= number1 + number2;
    return result;   
}

const result = addTwoNumber(3,5)
console.log("Result: ", result);
 */  // return values


/*  function logInUserMessage(userName){
    return `${userName} just logged in`
 }

console.log(logInUserMessage("PRASHANT")); */





/* 
// function logInUserMessage(userName = "Sam"){    //Execute before others
function logInUserMessage(userName){
    // if(userName === undefined){
    if (!userName) {
        console.log("please enter the username");
        return
        
    }
    return ` ${userName} just logged in`
}

//console.log(logInUserMessage()); //undefined
//console.log(logInUserMessage("")); //undefined
console.log(logInUserMessage("Prashant"));

 */







/* 
// function calculateCarPrice(num1){
    //function calculateCarPrice(val1,val2, ...num1){  //initial two value move in val1 and val2
    function calculateCarPrice(...num1){
    return num1;
}
// console.log(calculateCarPrice(200,200,300));
console.log(calculateCarPrice(200,300,400)); 
*/


 
/*
// const user = {
//     userName: "hitesh",
//     price: 199
// } 


const user = {
    userName: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    userName: "Prashant Kumar",
    price: 199
}) 

*/


/* 
const myNewArray = [100,200,500,400]

function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));
 */