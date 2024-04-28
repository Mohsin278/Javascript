
// The for...in loop is a control flow statement used to iterate over the properties of an object. 
// It iterates over all enumerable properties of an object, including those inherited from the prototype chain.

// for (variable in object) {
//   // code to be executed
// }

// variable: On each iteration, a variable is assigned the name of the property.
// object: The object whose enumerable properties are to be iterated over.

// const person = {
//   name: "Mohsin",
//   age: 24,
//   city: `Shopian`
// }

// for ( const key in person) {
//   console.log(`${key}: ${person[key]}`)
// }

//Another Example
// const languages = {
//   Eng: "English",
//   Ur: "Urdu",
//   pb: "Punjabi",
//   ks: "Kashmiri"
// }

// for ( const key in languages) {
//     console.log(`${key} stands for ${languages[key]}`)
// }

// 2: When used with arrays, for...in loop iterates over the indices of the array, as well as any enumerable properties added to the array object itself.
// const programming = ["Javascript", "Python", "C++", "Java"]

// for ( const index in programming) {
//     console.log(programming[index])
//     console.log(index)
// }

// 3: Strings: When used with strings, for...in loop iterates over the indices of the characters in the string.

// const str = "hello!"

// for ( const index in str) {
//     console.log(index)
//     console.log(str[index])
// }

// Map is not itterable but we can make them itterable.
// const myMap = new Map()

// myMap.set(`name`, `Mohsin`)
// myMap.set(`age`, 24)
// myMap.set(`city`, `Shopian`)

// for ( const key in myMap) {
//     console.log(key)
// }