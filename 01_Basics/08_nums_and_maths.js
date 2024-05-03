// const score = 400
// console.log(score)

// const balance = new Number(100) //Another way of defining number.
// console.log(balance)

//********** Number Methods ***********//
// 01 => Number(): The Number() function converts the value of the object it's called in to a number.

// let stringNumber = "123"
// let numericNumber = Number(stringNumber)

// console.log(typeof stringNumber) // Output: string
// console.log(typeof numericNumber)// Output: number

// 02 The parseFloat() function is used to extract a numbere from a String.
// let string1 = "3.14"
// let string2 = "42 is my room number"

// console.log(typeof string1)  
// console.log(typeof string2)

// let number1 = parseFloat(string1)
// let number2 = parseFloat(string2)

// console.log(number1) // Output: 3.14
// console.log(number2) // Output: 42 // only if number is at starting of the string.

// 03 The isNaN() function determines whether a value is NaN (Not-a-Number).

// console.log(isNaN("abc")) //Output: true
// console.log(isNaN("123")) //Output: false

// 04 => toFixed(): It is used to format a number to a specified number of digits after the decimal point.
// and returns a string representation of the number.
// let number = new Number(123.57452)
// let number2 = new Number(100)

// console.log(number.toFixed(2)) // Output: "123.57"
// console.log(number2.toFixed(2)) // Output: "100.00"
// console.log(NaN.toFixed(2)) // Output: "NaN"
// console.log(Infinity.toFixed(2)) // "Infinity"
// console.log(5.578.toFixed(1)) //Rounding, Output: 5.6
// console.log(5.34.toFixed(1)) //Rounding to, 5.3
// let num = 8;
// console.log(num.toFixed(5)) // Output: 8.00000

// 05 => toPrecision() is used to format a number with a specified number of significant digits.
// It rounds of the number and round of depents on precision value we give.
// Result will always be string.
// let number = 123.532;
// let result = number.toPrecision(3);
// console.log(result); // Output: "124"

// 06 => toString() is used to convert a number to a string representation. 
// It allows you to specify an optional parameter, which specifies the radix (base) 
// of the number system to be used. If the radix is not specified, it defaults to base 10.

// let number = 123
// let result = number.toString()
// console.log(result) // Output: "123"(String value)

// let number = 10
// let binary = number.toString(2)
// console.log(binary) // Output: "1010"(Sting)

// let number = new Number(255)
// let hex = number.toString(16)
// console.log(hex) //Output: "ff"

// console.log(NaN.toString()) // output: NaN
// console.log(Infinity.toString()) // Output: Infinity

// 07 => The valueOf() method is used to return the primitive value of a number object. 
// This method is automatically called by JavaScript whenever a primitive value is expected 
// (e.g., when using operators or comparison).

// let numberObj = new Number(42)
// let primitivevalue = numberObj.valueOf()

// console.log(primitivevalue) // output: 42

//Automatic Invocation

// let numberObj = new Number(42)
// let result = numberObj + 10
// console.log(result) // Output: 52

//comparison
// let numberOnj1 = new Number(42)
// let numberObj2 = new Number(42)

// console.log(numberOnj1 === numberObj2) //output: false
// console.log(numberOnj1.valueOf() === numberObj2.valueOf()) //output: true


// 08 => toLocalString()

// const hundreds = 100000
// console.log(hundreds.toLocaleString(`en-IN`)) // Output: 1,00,000

// ************* Maths **************** //

// 01 => Math.abs(): Returns the absolute value of a number. converts only negative values into positive.
// console.log(Math.abs(-10)) //Output: 10

// 02 => Math.round(): Rounds a number to the nearest integer.
// console.log(Math.round(4.61)) // Output: 5
// console.log(Math.round(4.4)) // Output: 4

// 03 => Math.ceil(): Rounds a number up to the ceiling(means top) integer.
// console.log(Math.ceil(5.1)) //Output: 6

// 04 => Rounds a number down(bottom value) to the nearest integer.
// console.log(Math.floor(5.1)) //Output: 5

// 05 => Math.max() and Math.min() both are used get largest and smallest from an Array.

// console.log(Math.max(4, 5, 9, 2, 7)) //Output : 9
// console.log(Math.min(4, 5, 9, 2, 7)) //Output : 2

// ***** IMPORTANT ONE *****

// let min = 1;
// let max = 10;
// let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNumber); // Output: a random integer between 1 and 10
