// ***Primitive Data Types***

//String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol("123")
// const anotherId1 = Symbol("123")

// console.log(id === anotherId1) // false, because symbol is unique.
const number = 15782676786781256n // by writing n at the end, it will now use bigInt.
// console.log(typeof number)

// Let's illustrate these three steps with examples:

// 1. **Stored directly in memory**:
// When you declare a variable and assign it a primitive value, 
// that value is stored directly in memory(stack). Consider the following example:

// let x = 42; // Assigning the number 42 to variable x

// In this example, the value `42` is stored directly in memory, and the variable `x` holds a reference to the memory location where `42` is stored.

// 2. **Values are copied**:
//    When you assign a primitive value to another variable or pass it as an argument to a function, a copy of that value is made. Consider the following example:

// let x = 42;
// let y = x; // Assigning the value of x to y

// console.log(y); // Output: 42

// In this example, when `y` is assigned the value of `x`, a copy of `42` is made and stored in a new memory location. Both `x` and `y` now hold independent copies of the value `42`.

// 3. **Independence of values**:
//    Since each variable holds its own independent copy of the value, changing the value of one variable does not affect the value of another variable. Consider the following example:

// let x = 42;
// let y = x; // y now holds a copy of the value of x

// x = 50; // Changing the value of x

// console.log(x); // Output: 50
// console.log(y); // Output: 42 (unchanged)

// In this example, even though the value of `x` is changed to `50`, the value of `y` remains unchanged at `42`. 
// This is because each variable holds its own independent copy of the primitive value, 
// and changes to one variable do not affect the value stored in another variable.

// These examples demonstrate how primitive data types are stored in memory, how their values are copied, and 
// how changes to one variable do not affect the values stored in other variables.



//*** Referance (Non Primitive) ***

//Array, Ojects, Functions

const students = ["Ayaan", "Mohsin", "Madeeha", "Aayat"] //Array

// console.log(students)

let myObj = {
  name: "Madeeha", // Object
  age: 12,
}
// console.log(myObj)

const myFunction = function(){
  console.log("Hello World!") //Function
}

// console.log(typeof myObj);


//*********************Memory***************************** */

//Stack => Primitive

//Heap => Non-Primitive

let userId = "mohsinmanzoor@gmail.com"
let anotherId = userId // Value gets copied

userId = "Fida456@gmail.com"

// console.log(anotherId)

let userOne = {
  email: "user@google.com",
  upi: "ybl@okxxi"
}

let userTwo = userOne

userTwo.email = "Mohsin@google.com" //Chamges happen in Original value

// console.log(userOne.email)




