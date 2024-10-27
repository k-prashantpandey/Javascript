// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const i of arr) {
    // console.log(i);
    
}

const greeting = "Hello World"
for(const char of greeting)
{
    // console.log(`Each character is ${char}`);
    
}




// maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);


// for(const key of map)
for(const [key, value] of map)
{
    // console.log(key, ':-', value);
    
}

/* for (const key in map) {
   console.log(key);
}
 */  // for in Not working on map