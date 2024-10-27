// Array

const myArr = [1,2,3,4,5,6,7,8]
const heros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[2]);


// Array methodss

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);



// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);





const marbel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["shaktiman", "naagraj"]

// marbel_heros.push(dc_heros)
// console.log(marbel_heros);

// const allHeros = marbel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marbel_heros, ...dc_heros]    //Same as concat
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:"Hitesh"}));  //intersting

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));
