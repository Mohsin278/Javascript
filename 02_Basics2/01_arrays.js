//Arrays
// An array in JavaScript is a special type of variable that allows us to store multiple values in a single variable.
//  These values can be of any data type, including numbers, strings, objects, or even other arrays.

// Three Types of Array Declaration
// const myArr = [0, 1, 2, true, false, "name", 3, 4, 5]
// const myHeros = ["SRK", "Salman Bhai", "Amir Khan", "AK"]
// const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[5]) //Accessing Elements
// console.log(myHeros.length)
// console.log(myArr2.length)

// Modifying Elements : We can modify the elements of an array by directly assigning a new value to a specific index.
// let myArray = new Array(10, 20, 30, 40, 50)
// myArray[1] = 25

// console.log(myArray)

// ***** Array Methods ******//

// 1: The push() method adds one or more elements to the end of an array and returns the new length of the array.
// let fruits = ["apple", "banana", "orange"]
// fruits.push("grapes")

// console.log(fruits)

// 2: The pop() method removes the last element from an array and returns that element.
// const fruits = ["apple", "banana", "orange"]
// fruits.pop() // Orange got removed

// console.log(fruits)

// Another Example
// let ids = new Array("mohsin714", "Uzma01", "Fida06",)
// let removeId = ids.pop()

// console.log(removeId)
// console.log(ids)

// 3: The shift() method removes the first element from an array and returns that element.

// const numb = [1, 2, 3, 4, 5]
// firstNumb = numb.shift()

// console.log(firstNumb)
// console.log(numb)

// 4: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// let studentName = ["Mohsin", "Nusrat", "Asma", "Seerat"]

// studentName.unshift("Fidaa", "Seema")
// console.log(studentName)

// 5: The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
//  OR The slice() method in JavaScript allows us to extract a section of an array and create a new array containing those elements.

// let array = [`a`, `b`, `c`, `d`, `e`]

// console.log(array)

// let sliceArray = array.slice(1, 4) // Extracts elements from index 1 to 3 (not including 4)
// console.log(sliceArray) // Output: ['b', 'c', 'd']

// *** Another Example ***// Without Parameters

// let RollNo = new Array(1, 2, 3, 4, 5)
// console.log(RollNo)

// let slicedRollNo = RollNo.slice()
// console.log(slicedRollNo) // Creates a Shallow copy of entire array

// **** Negative Value ****//
// let array = [`a`, `b`, `c`, `d`, `e`]
// let slicedArray = array.slice(-3, -1)
// console.log(array)
// console.log(slicedArray)

// let Numbers = new Array(1, 2, 3, 4, 5, 6)
// console.log(Numbers)

// let slicedNumbers = Numbers.slice(1, 4)
// console.log(slicedNumbers)

// console.log(Numbers)

// 06: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// ***** Removing Elements ******//
// let Numbers = [1, 2, 3, 4, 5, 6]
// console.log(Numbers)

// let SplicedNumbers = Numbers.splice(1, 3) // Remove 3 numbers starting from index 1.
// console.log(SplicedNumbers) // Output: [2, 3, 4]

// console.log(Numbers)

// **** Adding Elements *****//

// let array = [`a`, `b`, `c`, `d`, `e`]
// console.log(array)

// let splicedArray = array.splice(1, 3, `x`, `y`, `z`) // Replaces 2 elements starting from index 1 with 'x', 'y', 'z'
// console.log(splicedArray) //[ 'b', 'c', 'd' ]

// console.log(array) // Output: ['a', 'x', 'y', 'z', 'e']

// 07: The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// let fruits1 = [`apple`, `banana`]
// let fruits2 = [`orange`, `grape`]
// let allFruits = fruits1.concat(fruits2)

// console.log(allFruits) // Output: ["apple", "banana", "orange", "grape"]

// let RollNo1 = new Array(10, 20, 30)
// let RollNo2 = new Array(50, 60, 70)

// let Total = RollNo1.concat(RollNo2)
// console.log(Total) //Output: [ 10, 20, 30, 50, 60, 70]

// **** Concat Multiple Arrays ****//

// const array1 = [1, 2]
// const array2 = [3, 4]
// const array3 = [5, 6]

// const concatenatedArray = array1.concat(array2, array3)
// console.log(concatenatedArray) // Output: [1, 2, 3, 4, 5, 6]

// ****** IndexOf and Includes ******//
// indexOf() returns the index of the element if found, or -1 if not found.

// const array = [1, 2, 3, 4, 5]
// console.log(array.indexOf(3))

// // includes() returns a boolean (true or false) based on whether the element is found or not.
// console.log(array.includes(2))

// The join() method in JavaScript is used to join all elements of an array into a string.
// It concatenates the elements of the array with a specified separator between each element.

// const array = [`apple`, `banana`, `orange`]
// console.log(array)

// const joinedString = array.join()
// console.log(joinedString)