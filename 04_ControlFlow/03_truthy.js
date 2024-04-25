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
  console.log("Array is empty")
} else {
  console.log("Array is not empty")
}