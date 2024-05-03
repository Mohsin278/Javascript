let score = "33abc"

// console.log(typeof(score))
// console.log(typeof score)

let valueInNumber = Number (score)
console.log(typeof valueInNumber)

// console.log(valueInNumber) //NaN => Not a number, 33abc got converted into number but when we see actual value in valueInNumber it is NaN


let score2 = null
// console.log(typeof score2) //Output: Object

let valueInScore = Number(score2) // so if we try to convert null it will give 0
// console.log(typeof valueInScore) //number
// console.log(valueInScore) // 0
 

let a = undefined;
// console.log(typeof a) Here type is Undefined.

let valueInA = Number(a)
// console.log(typeof valueInA)
// console.log(valueInA) // NaN


let userId = true
// console.log(typeof userId) // Boolean
let valueInId = Number(userId)
// console.log(typeof valueInId) // Number
// console.log(valueInId) // 1 if true, 0 if false

// "33" easily gets converted in 33
// "33abc" NaN, Not a Number
// true => gets converted in 1; false => 0
// null => 0
// undefined => NaN

//Boolean conversion
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // So when we convert 1 into Booean it will give True

// 1 => true  
// 0 => false
//"" => false  if we try to convert empty string it will give false
// undefine, null and NaN all these will be false.
//"mohsin" => true // when we give string with value it will give true
// "0" is true


//String conversion

let someNumber = 35
let stringNumber = String(someNumber)

// console.log(typeof stringNumber) // so, in this case the number 35 got converted into a string.
// console.log(stringNumber); //output: 35

// ************************* operations ******************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); // Addition
// console.log(2-2); // Subtraction
// console.log(2*2); // Multiplication
// console.log(2**3);  // 2 power 3
// console.log(2/2); //Divide
// console.log(3%2); // Remainder 

let str1 = "Mohsin"
let str2 = " Manzoor"

let str3 = str1 + str2 //concatenation
// console.log(str3)

// console.log("1" + 2); //concatenation
// console.log(1 + "2") //concatenation
// console.log("1" + 2 + 2) //concatenation
// console.log(1 + 2 + "2") // Firstly (1 + 2 = 3) then 3 concatenates with "2" o/p will be 32.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.table([num1, num2, num3]) //The value will be 4 in all three variables.


// Increment in JavaScript refers to increasing the value of a variable by one. 
// There are two main types of increment operators: prefix increment (++x) and postfix increment (x++). 
// Here's how they work step by step:

// 1. **Prefix Increment (++x)**:
// - The value of the variable `x` is increased by one before the rest of the expression is evaluated.
// - Example: `let x = 5; let y = ++x;`
// - In this example, `x` is first incremented to 6, and then the value of `y` becomes 6 as well.

// 2. **Postfix Increment (x++)**:
// - The value of the variable `x` is increased by one after the rest of the expression is evaluated.
// - Example: `let x = 5; let y = x++;`
// - In this example, the current value of `x` (5) is assigned to `y`, and then `x` is incremented to 6.

// In both cases, the variable `x` is incremented by one, but the timing of when the increment occurs differs between prefix and postfix increment operators.

let x = 5
let y = x++
// console.log(x, y)

