// Falsy values are those that evaluate to false when converted to a boolean. Some examples of falsy values include:

// false
// 0 (zero) and -0
// Empty strings ('' or "")
// NaN (Not a Number)
// null
// undefined
// BigInt

// Truthy values are those that evaluate to true when converted to a boolean. Any value that is not falsy is truthy. Some examples of truthy values include:

// true
// Numbers other than 0 (e.g., 1, -1, 2.5)
// "0" zero inside string
// Strings with at least one character even space ("false", " " space inside string)
// Arrays[] and objects{} (even if they are empty)
// Functions(){} => empty function

// For Arrays: Use the length property of the array.

const myArray = []

if(myArray){
  // console.log("Array is empty")
} else {
  console.log("Array is not empty")
}

// For Objects: Use the Object.keys() method to get an array of the object's own enumerable property names, then check the length of that array.

const myObject = {}

if (Object.keys(myObject).length === 0){

  // console.log("Object is empty")

} else {
  console.log("Object is not empty")
}

//All thses statements will be true.
// console.log( false == 0 )
// console.log( false == '' )
// console.log( 0 == '' )

//***** Important ******//
// The nullish coalescing operator (??) is a relatively new addition to JavaScript,
// introduced in ECMAScript 2020. It provides a way to provide a default value for
// variables that may be null or undefined. It's particularly useful when you want 
// to use a fallback value only when the variable is null or undefined, but not when 
// it's an empty string ('') or 0

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20

console.log(val1)

// The ternary operator, also known as the conditional operator, is a concise way to write
//  conditional statements in JavaScript. It's often used as a shortcut for simple if...else
//  statements when you need to assign a value based on a condition.

// condition ? expressionIfTrue : expressionIfFalse

const teaPrice = 100
// teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")