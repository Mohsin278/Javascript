
// The map() method in JavaScript is used to create a new array by applying a function to each element 
// of the original array. It doesn't mutate the original array; instead, it returns a new array containing 
// the results of applying the function to each element.

// Example... add 10 to all elements of Array
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const addedNums = myNumbers.map( (num) => num + 10) // It automatically return the value so we can store this in variable.
// console.log(addedNums)

// Same task done using 'foreach'
// const addedNums = []
// myNumbers.forEach( (numb) => {
//   addedNums.push(numb + 10)
// })

// console.log(addedNums)

// ****** Chaining *****//

// Chaining refers to the technique of calling multiple methods on an object or the result of a function 
// in a single statement, where each method call is performed sequentially on the returned value of the 
// previous method call. This allows for more concise and readable code.

// const chainNums =  myNumbers
//                   .map( (num) => num * 10)
//                   .map( (num) => num + 1)
//                   .filter( (num) => num >= 40)

// console.log(chainNums)

//***************** Chaining Example *********************/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const result = numbers
//               .filter( (num) => num % 2 === 0) // Filter even numbers
//               .map( (num) => num * 2) // Double each even number
              
// console.log(result)


