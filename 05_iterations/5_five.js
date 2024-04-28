// **** Important ****//
// for each method
// The forEach() method is a higher-order function available for arrays. 
// It allows us to iterate over each element of an array and perform a specified action for each element.

// Example
// array: The array you want to iterate over.
// callbackFunction: A function that is called once for each element in the array.
// Value: The value of the current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array forEach() was called upon.

const myArray = [1, 2, 3, 4, 5]

myArray.forEach((value, index, array) => {
  // console.log(`value of current element: ${value}: index of current element ${index} array itself ${array}`)
})

//Example
const coding = ["Java", "Python", "Python", "Javascript", "CPP"]

// coding.forEach( (item) => {
//     // console.log(item)
// })

// we can created a function and give it as a parameter.
function printMe(item){
    console.log(item)
}

// coding.forEach(printMe) // Just give function reference not execution.

// coding.forEach( (item, index, arr) => {
//       console.log(item, index, arr)
// })


// Array of Objects

const myCoding = [ 
  {
    langauageName: "Javascript",
    langauageFileName: "js"
  },

  {
    langauageName: "Java",
    langauageFileName: "java"
  },

  {
    langauageName: "Python",
    langauageFileName: "py"
  }
]

myCoding.forEach( (item) => {
    // console.log(item.langauageName)
})

const students = [
  { name: "Alice", age: 20, Grade: "A" },
  { name: "Bob", age: 22, Grade: "B" },
  { name: "Charlie", age: 24, Grade: "C"}
]

students.forEach( (value) => {
    console.log(value.Grade);
})