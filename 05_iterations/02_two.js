// While loop
// A while loop is a control flow statement that allow us to repeatedly execute a block of code as long as a specified condition evaluates to true. 
// It's useful when we don't know in advance how many times you need to iterate through the code.

// The condition is evaluated before each iteration. If it evaluates to true, the loop continues; if it evaluates to false, the loop terminates.
// The block of code inside the curly braces {} is executed as long as the condition is true.

// let i = 1

// while( i <= 10 ){
//   // console.log(`the value of i is ${i}`)
//   i++
// }

// Example
// Sum of numbers using while loop

// let number = 10
// let storedSum = 0
// let counter = 1

// while( counter <= number ){
//   storedSum += counter
//   counter++
// }

// console.log("Sum: ", storedSum)

// const myArray = [ "Mohsin", "Uzma", "Seerat"]
// let i = 0

// while ( i < myArray.length) {
//   console.log(`Value is ${myArray[i]}`)
//   i = i + 1
// }

// let str = "hello"
// let reverseStr = ""
// let i = str.length - 1 //index stars from 0, 

// while ( i >= 0) {

//   reverseStr = reverseStr + str[i]
//   i--
// }

// console.log("Rversed string:", reverseStr)

// Do While loop
// A do...while loop is a control flow statement that is similar to a while loop,
// but with one key difference: the condition is checked after the loop body has been executed, 
// meaning that the loop will always run at least once, regardless of the initial condition

// let i = 6;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
