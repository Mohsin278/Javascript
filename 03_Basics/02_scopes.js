
if(true){ 
  let a = 10
  const b = 20 //Thses Curly Braces is called scope.
  var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

// Block Scope or Local Scope:
// Block scope refers to the visibility of variables within a specific block of code,
// such as inside a function, loop, or an {}-delimited code block like an if statement or for loop.
// Variables declared using "let" and "const" have block-level scope, 
// meaning they are only accessible within the block in which they are defined.
// Variables declared inside a block are not accessible outside of that block.

if (true) {
  let x = 10; // x is only accessible within this if block
  // console.log(x)
}

// console.log(x) // Error: x is not defined

// Global Scope: Global scope refers to the visibility of variables that are accessible throughout 
// the entire JavaScript code, including inside functions, loops, or any other blocks.
// Variables declared outside of any function or block have global scope. 
// They can be accessed from anywhere within the JavaScript code.

// let a = 30 // y has global scope

// function exampleFunction(){
//   let a = 300
//   console.log(`INNER:`, a) // Accessible inside the function
// }

// console.log(a) // Accessible outside the function

let a = 300 

if(true){
  let a = 200
  // console.log(`INNER:`, a)
}

// console.log(a)

// ****** IMPORTANT ****** //
// When a function is defined within another function, the inner function has access to variables
//  and parameters of the outer function, as well as any variables declared in its own scope. 
// This is known as lexical scoping or closure in JavaScript.
function outerFunction(){
  let outerVariable = "I am outer"

  function innerFunction(){
    let innerVariable = "I am inner"
    console.log(innerVariable) // Access innerVariable from innerFunction
    console.log(outerVariable) // Access outerVariable from outerFunction
  }

  console.log(outerVariable)
  // console.log(innerVariable) // This will give error:
  
  // innerFunction()

}

// outerFunction()

// Another Example
if(true){
  const username = "Mohsin"

  if(username === "Mohsin"){
    const website = " Youtube"
    // console.log(username + website)
  }

  // console.log(website) // Out of Scope

}

// console.log(username) // Out of Scope

// ***** Interesting *****//

console.log(addone(5))
function addone(num){

  return num + 1

}


// console.log(addtwo(5)) // This will give Error

const addtwo = function(num2){

  return num2 + 2

}
