const fruits = ["apple", "orange", "grapes"]
const Junk = ["Lays", "maggie", "Chocolate"]

// fruits.push(Junk) // not good practice
// console.log(fruits)

// let food = fruits.concat(Junk)
// console.log(food)

// ***** Spread Operator ****//

const food = [...fruits, ...Junk] // Another way to concat two or more arratys
// console.log(food)

// flat(): When you have an array that contains other arrays as its elements (nested arrays),
// flattening means converting it into a single-dimensional array where all nested arrays are "flattened" or merged into the outer array.

// const nestedArray = [1, 2, 3, [4, 5], 7, 8, [9, 0, [3, 7, 2]], 8]
// const flattenedArray = nestedArray.flat(Infinity)

// console.log(flattenedArray)
// console.log(nestedArray.length)

// ***** Array.isArray ****** //
// Array.isArray is a built-in JavaScript method that checks whether a given value is an array or not.
//  It returns true if the value is an array, otherwise false. 

// const array = [1, 2, 3]
// const string = `hello`
// const object = { a: 1, b:2 }

// console.log(Array.isArray(array))
// console.log(Array.isArray(string))
// console.log(Array.isArray(object))

// ***** Array.from *******//
// The Array.from() method in JavaScript creates a new array instance from an array-like or iterable object.
//  It allows you to convert array-like objects (e.g., NodeList, arguments object) or iterable objects (e.g., strings, maps, sets) into a real Array.

// const str = new String(`Mohsin`)
// const strArray = Array.from(str)

// console.log(str)
// console.log(strArray)


// ****** Array.of *****//

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))

// The difference between Array.of() and the Array() constructor is in the handling of single arguments:
//  Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a 
// length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.)

let ofArr = Array.of(7)
let NormalArr = new Array(7)

console.log(ofArr) // [7]
console.log(NormalArr) // array of 7 empty slots