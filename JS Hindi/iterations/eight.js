// reduce method

const myNums = [1,2,3]

const myTotal = myNums.reduce( function (acc, currval) { 
    // console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)
// console.log(myTotal);


const total = myNums.reduce( (acc,curr) => acc+curr, 0)
// console.log(total);







const shoppingCart = [
    {
    itemName: "js Course",
    price: 2999
    },
    {
    itemName: "java",
    price: 2000
    },
    {
    itemName: "python",
    price: 3599
    },
];
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
