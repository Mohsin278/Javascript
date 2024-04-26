const name = 'John';
const age = 30;

// console.log(name + rollNo + " anyValue"); // Outdated method

//Sting Interpolation
// console.log(`hello! my name is ${name} and my age is ${age} years old`) //Use Back tick which at the upper side of Tab key on keyboard.

// console.log(name.length)
// console.log(name.__proto__)

const gameName = new String(`Mohsin-hc`)

// console.log(gameName[5])
// console.log(gameName.__proto__); //used to see an object




//***********Practice***********/

// let str = "Hello"
// Another Syntax of Declaring a String

// let str = new String(`Hello World!`)

// 01 => charAt(index): Returns the character at the specified index.
// console.log(str.charAt(11)) //Output: !

// 02 => charCodeAt(index): Returns the Unicode value of the character at the specified index.
// console.log(str.charCodeAt(3)) //Output: 108

// 03 => concat(string2, string3, ...): Combines two or more strings.
// let str1 = new String(`Mohsin `)
// let str2 = new String(`Manzoor `)
// let str3 = new String(`Wagay`)

// let concatString = str1.concat(str2, str3)
// console.log(concatString)

// 04 => The includes() method in JavaScript is used to check whether one string contains 
// another string within it. Optionally, you can specify a starting position from where the
//  search should begin within the string. 

// let MyName = new String(`Hello! my name is Mohsin`)

// console.log(MyName.includes(`Mohsin`)) //Output: true
// console.log(MyName.includes(`my`, 8)) //Output: false, Since word "my does't exist after index 8 in MyName"
// console.log(MyName.includes(`name`, 5)) //Output: true, it does exist after index 5

// 05 => indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string, 
// starting the search at the specified index, if the specified value is not found 
// in the string, indexOf returns -1

// let str = new String(`Hello! World`)
// console.log(str.indexOf(`o`, 3))

// 06 => lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string, 
// searching backwards from the specified index.

// let str = new String(`Mohsin Manzoor`)
// console.log(str.lastIndexOf(`o`,)) //output: 12

// 07 => length: Returns the length of a string.
// let companyName = new String(`Google PVT LTD`)

// console.log(companyName.length) //Output: 14, no need of Brackets in length

// 08 => The slice() method is used to extract a section of a string and returns it as a new string. 
// It does not modify the original string. we can use it to extract a substring starting from a specified index 
// position to another specified index position
// let str = "Hello, world!";
// console.log(str.slice(7)); // Output: "world!"
// console.log(str.slice(7, 12)); // Output: "world"
// console.log(str.slice(-6)); // Output: "world!"
// console.log(str.slice(7, -1)); // Output: "world"


// 09 => split(separator, limit): Splits a string into an array of substrings based on the specified separator. Optionally,
//  you can specify a limit to how many splits to perform

// let fruits = new String(`apple-banana-orange`)

// console.log(fruits.split(`-`)) //Output: [`apple`, `banana`, `orange`]

// 10 => toLowerCase(): Converts a string to lowercase.

// let str = new String(`Mohsin Manzoor`)

// console.log(str.toLocaleLowerCase())

// 11 => toUpperCase(): Converts a string to uppercase.

// let str = new String(`mohsin manzoor`)
// console.log(str.toUpperCase())

// 12 => trim(): Removes whitespace from both ends of a string.

// let str = new String(`  Hello World   `)
// console.log(str.trim()) // Output: Hello World ... without extra spaces.

// 13 => replace(searchValue, newValue): Replaces a specified value with another value in a string.
// 
// let url = "https://mohsin%manzoor%714%.com"
// replace() method only replaces the first
//  occurrence of the specified value by default. 

// console.log(url.replace("%", "-"))

// If you want to replace all occurrences, 
// you can use a regular expression with the global (g)
// let str ="Hello, World! Hello, World!"
// console.log(str.replace(/World/g, "Universe"))

// 14 => startsWith(searchString, position): Checks if a string starts with another string. Optionally, you can specify a starting position.

// let str = new String(`Hello! World`)

// const newStr = str.startsWith(`Hello`)
// console.log(newStr) //Output: True

// 15 => endsWith(searchString, position): Checks if a string ends with another string. Optionally, you can specify a starting position.
// let str = "My name is Mohsin Manzoor"

// console.log(str.endsWith("Manzoor"))

// 16 => padStart(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length. 
// Padding is applied from the start.

// let firstName = `Mohsin`

// const fullName = firstName.padEnd(14, " Manzoor")
// console.log(fullName)

// let person = new String(`Mohsin`)

// console.log(person.padEnd(10, ` 714`))

// padEnd(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.
//  Padding is applied from the end.

// let lastName = `Manzoor`
// console.log(lastName.padStart(14, `Mohsin `))

//********** Final Note ************//
//HOW TO USE MULTIPLE STRING METHOD AT A TIME.
// Chaining Execution Order: In JavaScript, method calls are executed from left to right.

let myName = `   mohsin manzoor`
let check = `mohsin`

let result = myName.toUpperCase().trim()
console.log(result)

// First, toUpperCase() is applied.
// Then, trim() is applied to the result of toUpperrCase().