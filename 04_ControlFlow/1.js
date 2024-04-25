// Control flow refers to the order in which statements are executed within a script. 
// It determines how the program navigates through its code based on conditions, loops, and function calls.
//Sequential Execution: JavaScript executes code sequentially by default, line by line from top to bottom.

// if Statement
// Condition should be true or false (Boolean will be used)
// If condition is true then only code inside if statement will run.
// If false control will come out of the Scope.

// if (condition){      
//                   // Curly braces is called scope

// }

//Operators used in for Comparison 
// <, >, <=, >=, ==, !=, ===, !==
// The "!==" operator is known as the "strict inequality" operator. 
// When we use the "!==", it returns true if the operands on both sides of the operator are not equal to each other or are not of the same data type.
// If the operands are of the same data type and have the same value, the "!=="" operator returns false.

// if( 2 !== 2 ){
//   console.log("Executed")
// }

// console.log("Not Executed")

// const temperature = 41

// if ( temperature === 50) {
//   console.log(`Less than 50`)
// }

// console.log(`Temperature is more than 50`)

// If else

// const temp = 40

// if( temp !== "40"){
//     console.log("It is sunny today")
// } else {
//     console.log("It is very hot today")
// }

// const score = 200

// if( score > 100 ){
//   let power = "fly"
//   console.log(`User Power: ${power}`)
// } 

// console.log(`User Power: ${power}`) // Error
// Since power is declared within the block scope of the "if" statement using the const keyword, 
// it's not accessible outside of that block. Therefore, when we try to log power outside of the "if" statement, 
// it will result in an error stating that power is not defined.

// Shorthand Notation

const balance = 1000

// if(balance > 500) console.log("test");

// if( balance < 500 ){
//     console.log("less than 500")
// } else if ( balance < 750 ) {
//     console.log("less than 750")
// } else if ( balance < 900 ){
//     console.log("less than 900")
// } else{
//   console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){  // Both should true, we can also use more than 2 conditions here
  console.log("Allow to buy course")
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestuser = true

if( loggedInFromGoogle || loggedInFromEmail || guestuser){ //Either of the one should true.
  console.log("login Success")
}