// for of loop
// The for...of loop is a modern iteration statement introduced in ECMAScript 2015 (ES6) for iterating 
// over iterable objects such as arrays, strings, maps, sets, and other iterable objects. 
// It provides a simpler syntax compared to traditional for loops when you need to iterate over the elements of an iterable object.

// Number Array Example
const studentRoll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for (const rollNo of studentRoll) {
  // console.log(`Roll no. ${rollNo}`)
  
}

// String Array Example

const studentNames = ["Mohsin", "Ayaan", "Sahiba", "Uzma"]

for ( const name of studentNames ){
  // console.log(`Student Name is ${name}`)
}

// String Example

const greetings = "Hello world!"

for ( const greet of greetings){
  if ( greet === " ") {
    continue
  }
    // console.log(`char is ${greet}`)
}


// ****** Important ******///
// Object.entries(): Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.
// Object Example

const myObject = {
  name: "Mohsin",
  age: 24,
  city: "Shopian"
}

// Convert object entries into an iterable array using Object.entries()
const iterableObj = Object.entries(myObject)

for (const [key, value] of iterableObj) {
    // console.log(`${key}: ${value}`)
}

// console.log(iterableObj)

// ****** Maps ******//
// Maps are a built-in data structure introduced in ECMAScript 2015 (ES6) that allow us to store key-value pairs where both the keys and the values can be of any data type. 
// Maps are iterable, meaning we can easily iterate over their elements. Unlike objects, maps maintain the order of elements, making them useful when order is important.
// Unique values (no duplicate values)

// Creating a Map
// Using the Map constructor
const myMap = new Map()

//Using map literal syntax
// const myMap = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2']
// ])

myMap.set(`IN`, `India`)
myMap.set(`USA`, `United States of America`)
myMap.set(`UK`, `United Kingdom`)
myMap.set(`FR`, `France`)

// console.log(myMap)

for ( const [key, value] of myMap) {
    console.log(key, ':' , value)
    
}