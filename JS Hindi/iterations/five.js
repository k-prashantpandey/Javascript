const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    //console.log(item);
} )




coding.forEach( (val) => {
   //  console.log(val);
} )




function printMe (item){
    // console.log(item);
}
coding.forEach(printMe)




coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})




const myCoding = [
    {
        language: "javascript",
        languageName: "js"
    },

    {
        language: "java",
        languageName: "java"
    },

    {
        language: "python",
        languageName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})