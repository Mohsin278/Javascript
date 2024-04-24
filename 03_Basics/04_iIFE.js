//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
//It's a way to execute a function immediately after it's created, without needing to explicitly call it elsewhere in the code.
//It's typically used to create a private scope for variables to avoid polluting the global scope and to encapsulate code.

(function chai(){  //named IIFE
  console.log(`DB CONNECTED`)
})(); // Semi-colon iss must


// IIFE with Arrow function
( () =>{      // Unnamed IIFE
  console.log(`DB CONNECTED 2`)
} )();

//IFFE function with parameter and arguement 
 ( (name) => {
  console.log(`DB CONNECTED to ${name}`)
})("Mohsin");

// ***** Practice Session ***** //

( (num) => {
  console.log(`Square of ${num} is ${num * num}`)
})(10);

// Power of Number

( (number) => {
  console.log(`Power of ${number} is ${number ** number}`)
})(2)