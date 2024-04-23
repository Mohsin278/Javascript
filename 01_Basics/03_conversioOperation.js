let score = "33abc"

// console.log(typeof(score))
// console.log(typeof score)

let valueInNumber = Number (score)
// console.log(typeof valueInNumber)

// console.log(valueInNumber) //NaN => Not a number, 33abc got converted into number but when see actual value in valueInNumber it is NaN


let score2 = null
// console.log(typeof score2)

let valueInScore = Number(score2) // so if we try to convert null it will give 0
// console.log(typeof valueInScore)
// console.log(valueInScore)
 



let a = undefined;
// console.log(typeof a) Here type is Undefined.

let valueInA = Number(a)
// console.log(typeof valueInA)
// console.log(valueInA) // NaN


let userId = true
// console.log(typeof userId)
let valueInId = Number(userId)
// console.log(typeof valueInId)
// console.log(valueInId)

// "33" easily gets converted in 33
// "33abc" NaN, Not a Number
// true => gets converted in 1; false => 0
// null => 0
// undefined => NaN

//Boolean conversion
let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // So when we convert 1 into Booean it will give True

// 1 => true  
// 0 => false
//"" => false  if we try to convert empty string it will give false
//"mohsin" => true // when we give sting with value it will give true


//String conversion

let someNumber = 35
let stringNumber = String(someNumber)

// console.log(typeof stringNumber) // so, in this case the number 33 got converted into a string.
// console.log(stringNumber);

