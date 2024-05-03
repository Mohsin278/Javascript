// for loop
// A "for loop" is a control flow statement that allows us to execute a block of code repeatedly for a specified number of times. 
// It's often used when you know in advance how many times you want to iterate through a block of code.

for (i = 0; i <= 10; i++) {
  const element = i;

  if( element == 5){
    // console.log("5 is Best Number")
  }
  // console.log(element)
}

// const element = i; Error : Becoz of Block scope or Local scope.


for( i = 0; i <= 10; i++){

  // console.log(`Outer loop ${i}`)
    for (let j = 0; j < 10; j++) {
      //console.log(`Inner loop ${j} and outer loop ${i}`)
      // console.log(i + '*' + j + '=' + i*j)
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element)
}

// Keywords

// break statement:
// The break statement is used to terminate the execution of a loop prematurely.
// When encountered inside a loop, the break statement immediately exits the loop and continues with the code that follows the loop.
// It's typically used when a certain condition is met, and you want to stop the loop execution.

for ( let i = 1; i <= 20; i++) {
  if ( i === 5){
    // console.log("5 Detected")
    // break
  }
  // console.log(`value of i is ${i}`)

}

// console.log("Now you are outside the Block scope or Local scope")

// continue statement:
// The continue statement is used to skip the current iteration of a loop and continue with the next iteration.
// When encountered inside a loop, the continue statement skips the remaining code in the loop's body for the current iteration and continues with the next iteration.
// It's typically used when you want to skip certain iterations based on a condition, but continue looping.

for ( let i = 1; i <= 5; i++) {
  if ( i === 3 ) {
    continue // Skip iteration when i is 3
  }
  console.log(i)
  
}