
/*
const coding = ["js", "ruby", "java", "python", "cpp"]

const obj = coding.forEach( (item) => {  
    // console.log(item);
    return item;
})

console.log(obj);           // forEach can't return any value
*/



const myNums = [1,2,3,4,5,6,7,8,9,10]  // three method for on result

const newNum = myNums.filter( (num) => num>4 )
// console.log(newNum);


const anotherNum = myNums.filter( (num) => {
    return num > 4
})
// console.log(anotherNum);



const newNums = []
myNums.filter( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);




// Important

const books = [
    { title: 'book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'book two', genre: 'non fiction', publish: 1986, edition: 2010 },
    { title: 'book three', genre: 'history', publish: 1992, edition: 2014 },
    { title: 'book four', genre: 'non fiction', publish: 1976, edition: 2000 },
    { title: 'book five', genre: 'science', publish: 1985, edition: 2009 },
    { title: 'book six', genre: 'fiction', publish: 1998, edition: 2019 },
    { title: 'book seven', genre: 'history', publish: 2000, edition: 2024 },
    { title: 'book eight', genre: 'science', publish: 1987, edition: 2007 },
    { title: 'book nine', genre: 'non fiction', publish: 1995, edition: 2013 },
    { title: 'book ten', genre: 'non fiction', publish: 1991, edition: 2010 },
    { title: 'book eleven', genre: 'science', publish: 1990, edition: 2003 },
    { title: 'book twelth', genre: 'history', publish: 1975, edition: 2022 },
    { title: 'book thirteen', genre: 'fiction', publish: 1999, edition: 2023 },
];

const userbooks = books.filter( (bk) => bk.genre === 'history')
    // console.log(userbooks);


    
const userbook1 = books.filter( (bk) => {
     return bk.publish > 1998 && bk.genre === "history"
    })
console.log(userbook1);
