//Challenge 1
//simple
let codeNation1 = () => {
        console.log("Hello Code Nation")
    }
//extended
let codeNation5 = (reps) => {
    for (i=0; i < reps; i++){
        console.log("Hello Code Nation")
    }
}
codeNation1()
codeNation5(5)

//Challenge 2
//simple
let myAdd = (num1, num2) => {
    return num1 + num2
}
console.log(myAdd(1,2))
//extended

let myAdd = (reps, num1, num2) => {
    myArray = []
    for (let i = 0; i < reps; i++) {
      myArray.push(num1+num2)
    } 
    const reducer = (a,b)=>a+b
    return myArray.reduce(reducer)
}
console.log(myAdd(5, 1, 2));

// challenge 3 - use map to iterate through an array & multiply each array item by 3.
let myArr = [1,2,3,4,5];
const map1 = myArr.map(x => x * 3);
console.log(map1)

//challenge 4 - 
const multiply = (a,b) => {
    return a*b
}
const add = (a,b) => {
    return a+b
}
const divide = (a,b) => {
    return a/b
}
const subtract = (a,b) => {
    return a-b
}
const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}
doMath(add)
fn (5,2)