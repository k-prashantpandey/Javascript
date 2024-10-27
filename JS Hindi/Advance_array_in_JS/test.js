myArray = [1,2,3,4,5,6];
// %DebugPrint(myArray);

// continious, Holey
// SMI (small integer)
// packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5];   // best type of array
//Packed_SMI_Elements

arrTwo.push(6.0)
// packed Double elements

arrTwo.push('7')
// packed elements

arrTwo[10] = 11;
// Holey elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes are very expensive in javascript

const arrThree = [1,2,3,4,5,6];
console.log(arrThree[2]);


// SMI > Double > packed
// H_SMI > DOUBLE > H_PACKED


const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS

// arrFour[0] = '1'  //HOLEY_ELEMENTS
// arrFour[1] = '2'  //HOLEY_ELEMENTS
// arrFour[2] = '3'  //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS


const arrSix = [1,2,3,4,5]
arrSix.push(NaN)       // PACKED_DOUBLED
arrSix.push(Infinity)  // PACKED_DOUBLED


// please Use (for, for-of, forEach and all types of prefer methods) in ARRAY.