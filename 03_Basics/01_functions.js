// Parameter: It's the placeholder or variable name that we define in the function declaration.
// In our example number1 and number2 are Parameters.
// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2)
// }

// Argument: It's the actual value that we pass to the function when calling it.
// In our example 3, 4 are argument.
// addTwoNumbers(10, 15)
// addTwoNumbers(10, "20")
// addTwoNumbers("20", "24")
// addTwoNumbers(71, "M")
// addTwoNumbers(" ") //Undefined

//Also when calling a function we can store the result in a Varaible.
// function addTwoNumbers(number1, number2) {
//       // console.log(number1 + number2)
// }
// const result = addTwoNumbers(4, 5)
// console.log(result)
// So, we try to print result it will give output as Undefined.

// Best way to write functions 
// function addTwoNumbers(number1, number2){
//     let result =  number1 + number2
//     return result
// }

// const Answer = addTwoNumbers(4, 5)
// console.log(Answer)

// function loginUserMessage(username){
//   return `${username}, Just Logged In`
// }

// console.log(loginUserMessage(null))


// If the username is provided (i.e., not falsy), it returns a message saying that the user has logged in;
//  otherwise, it logs a message asking the user to enter a username.
// function loginUserMessage(username){
//   if(!username){ 
//     console.log(`Please Enter a Username`)
//     return
//   }
//   return `${username}, Just Logged In`
// }

// console.log(loginUserMessage("Mohsin"))
// console.log(loginUserMessage("Fida")) // Output: Undefined

// "!"" converts true into false and false into true.
// So, in this case we passed undefined as argument in function call,
// so username is now undefined, by default undefined and empty string
// is considered as false, As we know in If Statement if the condition is true 
// then only code of if statement will be executed,
// As undefined and empty string is considered as false then code
// inside if statement will never be executed, so we use "!" it will convert
// false into true and true into false.

// Most Important Notes.

// These values are considered "falsy", meaning they evaluate to false when used in a boolean context.
// 1: false: The boolean value false itself is falsy.
// 2: null: Represents the intentional absence of any object value.
// 3: undefined: Represents a variable that has been declared but has not been assigned a value.
// 4: 0: The number zero.
// 5: -0: Negative zero.
// 5: NaN: Stands for "Not-A-Number" and represents an invalid number.
// 6: '' (empty string): A string with no characters.
// 7: "" (empty string): Another representation of an empty string

// if (false) {
//   console.log("false is truthy!"); // This won't be printed
// }

// if (null) {
//   console.log("null is truthy!"); // This won't be printed
// }

// if (undefined) {
//   console.log("undefined is truthy!"); // This won't be printed
// }

// if (0) {
//   console.log("0 is truthy!"); // This won't be printed
// }

// if (NaN) {
//   console.log("NaN is truthy!"); // This won't be printed
// }

// if ('') {
//   console.log("An empty string is truthy!"); // This won't be printed
// }
// Note: Since all these values are falsy, none of the corresponding console.log statements will be executed.


//Default Value
// function loginUserMessage(username = `You`){
//   return `${username}, just logged in`
// }

// console.log(loginUserMessage())
// console.log(loginUserMessage("Mohsin"))

//Rest Parameter: allows a function to accept an indefinite number of arguments as an array. 
// It collects all the remaining arguments passed to the function into a single parameter, 
// which can then be accessed as an array within the function. This provides flexibility 
// in handling functions that need to work with varying numbers of arguments.

// function calculateCartPrice(...numb1){
//   return numb1
// }

// console.log(calculateCartPrice(10, 20, 44, 53)) // All these numbers will be stored in an Array named numb1. 

// Base Value
function calculateCartPrice(basevalue1, basevalue2, ...total){

  return total
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500))
// 100 and 200 will be stored in basevalue1 and basevalue2 respectively.
// 300, 400, 500 will be stored in array named total.


// When we pass an object as an argument to a function, 
// we're essentially passing a reference to that object, 
// not a copy of it. This means that any changes made to 
// the object within the function will affect the original object outside the function.

const user = {
  name: "Mohsin",
  price: 199
}

const user2 = {
  name: "Seerat",
  price: 299
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleObject(user2)
//Passing Object directly in function call.
// handleObject({
//   name: "Uzma",
//   price: 399
// })

//Passing array in function
// Passing arrays as arguments to functions is quite similar to passing objects.

const myNewArray = [100, 200, 300, 400, 500]
const secondArray =[4, 9, 4, 0, 1, 7]

function arrayValues(anyArray){
  return anyArray[2]
}

// console.log(arrayValues(myNewArray))
// console.log(arrayValues(secondArray))

//Passing array directly while calling function.
// console.log(arrayValues([10, 52, 17, 45]))