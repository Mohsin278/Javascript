
const user = {
  username: "Mohsin",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to our website`) // "This" works on current context. 
    console.log(this) //It will output the 'user' object itself. (Current Context which is in { } )
  }


}

// user.welcomeMessage()
// user.username = "Sam" // Context changed
// user.welcomeMessage()

// Global Context
// console.log(this) 
// Node.js has its own global object, called global, which serves a similar purpose to the window object in a web browser environment. 
// However, in Node.js, the value of 'this' in the global scope is an empty object {} rather than the global object itself. 
// This behavior is specific to Node.js.

const user2 = {
  username: "Uzma",
  price: 200,

  userWelcomeMessage: function(){
    console.log(`${this.username}, welcome to our website. ${this.username}, the price has updated to ${this.price}`)
    console.log(this) // In method context, "this" refers to the object the method is called on.
    // Here Object is called on two times with updated values it will console whole object two times.
  }
}


// user2.userWelcomeMessage()

// user2.username = "Seerat"
// user2.price = 500
// user2.userWelcomeMessage()

// ******** Function Context of 'this' keyword
//In Node.js, the global object is represented by global, 
// and it contains various properties and methods such as 
// setImmediate, clearImmediate, setTimeout, setInterval, etc.
//This is how 'this' keyword behaves in Node.js when a function is called without a specific context.

// function chai(){
//   console.log(this)
// }

// chai()

// In this case 'this' will be undefined.
// In regular function callst'this' refers to the global object.. 
// function chai(){
//   let username = "Mohsin"
//   console.log(this.username) // undefined
// }

// chai()

// ***** Another Example *****//
// const chai  = function(){
//   let usernmae = "Mohsin"
//   console.log(this.username) // undefined
// }

// chai()


// ***** Arrow Function ***** //
// const chai = () => {
//   let username = "Mohsin"
//   // console.log(this.username) //undefined
//   console.log(this) // Refers to the Global object
// }

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// console.log(addTwo(3, 4))

// *** Implicit return *** //
// No need to write curly {} braces and return keyword.

const addTwoNumbers = (num1, num2) => num1 + num2

// console.log(addTwoNumbers(3, 4))

//Another example of Implicit return
// If we write in Curly Braces{} then we must write return keyword or we 
// we can just use parenthises (), here no need to write return keyword.
// Important for React.
// const multiply = (number1, number2) => (number1 * number2)
// console.log(multiply(10, 20))

// So, if we define object in arrow function we must use parenthesis otherwise output will be undefined.
const objInArrow = (number1, number2) => ({username: "Mohsin"})

// console.log(objInArrow())

//***** Practice Session *****///
// Example one
const doubleTheNumber = (num) => num * 2

// console.log(doubleTheNumber(2))
// console.log(doubleTheNumber(10))

// Example Two
const captilize = (str) => str.toUpperCase()

// console.log(captilize("hello"))

//Example Three
const isEven = (numb) => numb % 2 === 0

// console.log(isEven(12))
// console.log(isEven(15))

// example Four
// const findMin = (arr) => Math.min(...arr)

// console.log(findMin([12, 52, 73, 98, 200, 12]))

//findmax
const findMax = (arr) => Math.max(...arr)

// console.log(findMax([100, 900, 200, 400]))

// he ** operator is the exponentiation operator.
const calculateBMI = (weight, height) => weight / (height**2)

// console.log(calculateBMI(90, 2))