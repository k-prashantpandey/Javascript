/* 

// var c = 300
let a = 300
if(true)
{
    let a = 10
    const b = 20
    console.log("Inner ", a);
}

console.log("Outer ",a);
// console.log(b);
// console.log("var ",c);

 */





/* 
function one()
{
    const userName = "Hitesh"

    function two()
    {
        const website = "Youtube"
        console.log(userName);
        
    }

    //console.log(website);
    two()
}

one()
 */




if(true)
{
    const username = "Hitesh"

    if (username === "Hitesh")
    {
        const website = " Youtube"
        console.log(username + website);
    }

    // console.log(website);
    
}
   // console.log(username);
    




// ****************************************************  Interesting  ***********************************************************
/* 
// console.log(addOne(5)); // can access ( addOne ) before initialization

function addOne(num)
{
    return +1;    
}

console.log(addOne(5));


// console.log(addTwo(5)); //// cannot access ( addOne ) before initialization
const addTwo = function(num)
{
    return +2;
}
console.log(addTwo(5));
 */