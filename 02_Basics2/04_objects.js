// 1: Key-value pairs are the building blocks of JavaScript objects. 
// Each property of an object consists of a key (property name) and a corresponding value.

let person = {
  name: "mohsin",
  age: 22,
  isStudent: true
}

// 2: Objects can be created using object literals {}, the new Object() constructor, or through object constructors.
// Using Object literal{}

let car = {
  company: "Toyota",
  model: "Camry"
}

// Using new Object() constructor
let employee = new Object()

employee.name = "Mohsin"
employee.age = 20

// 2: Accessing Properties: Properties of an object can be accessed using dot notation (object.property) or bracket notation (object['property']).
// console.log(car.company) // Output: Camry
// console.log(employee.age) //Output: 20

//OR

// console.log(car[`model`])
// console.log(employee[`name`])

// 3: Adding and Modifying Properties: Properties can be added or modified at any time by simply assigning a value to a new or existing key.

car.number = 2546
employee.gender = "Male"

// console.log(car[`number`])
// console.log(employee[`gender`])

// 5: Object Methods: Functions stored as object properties are called methods and can be invoked using the same syntax as accessing properties.
let rectangle = {
  width: 10,
  height: 5,
  area: function() {
    console.log(`This is height ${this.height}`)
  }
}

// console.log(rectangle.area())

// const tinderUser = new Object() //Singleton
const tinderUser = {} // Non-Singleton

tinderUser.id = "m714"
tinderUser.name = "Mohsin"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// Nested Objects: You can define an object that contains other objects as properties.
// Each nested object is a property of the parent object.
const regularUser = {
  email: "example@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Mohsin",
      lastname: "Manzoor"
    }
  }
}

// console.log(regularUser[`fullname`][`userfullname`][`firstname`])
// OR
// console.log(regularUser.fullname.userfullname.lastname)

// Another Example of Objects
let Person = {
  name: {
    firstname: "Mohsin",
    lastname: "Manzoor"
  },

  age: 20,

  address: {
    HomeAddress: {
      HouseNo: 88,
      road: "Keegam",
      city: "Shopian",
      country: "India"
    },

    OfficeAddress: {
      flatNo: 92,
      road: "AnyRoad",
      city: "Riyad",
      country: "Saudi Arabia"
    }
  }
}

// console.log(Person.address.HomeAddress.city)
// console.log(Person[`address`][`OfficeAddress`][`country`])

// Modifying Properties of Nested Objects
// Properties of nested objects can be modified like any other property.
// You can access the nested object and then modify its properties.
Person.gender = "Male"
Person.name.surname = "Wagay"

// console.log(Person[`gender`])
// console.log(Person['name'][`surname`])


// Adding Nested Objects Dynamically:
// We can add nested objects dynamically by assigning a new object to a property of the parent object.
Person.details = {
  hobbies: ["Reading", "Gardening"],
  occupation: "Software Engineer"
}

// console.log(Person[`details`][`occupation`])

Person.details.favoritefood = [`Biryani`, `mommos`, `etc`]

// console.log(Person.details.favoritefood)

// Combine two or more objects into one.
// Using the Spread Operator (...):
// This method creates a shallow copy of the objects, 
// meaning nested objects are still referenced and not deeply copied.

let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4}

let Obj3 = { ...obj1, ...obj2 }
// console.log(Obj3)

// A shallow copy is a type of copy operation in which only the top-level structure of the original object is duplicated,
// while the nested objects and their references are shared between the original object and the copied object.

const originalObj = {
  name: "mohsin",
  age: 23,
  address: {
    city: "New York",
    country: `USA`
  }
}

// Creating a shallow copy
const shallowCopy = { ...originalObj }

shallowCopy.name = "Uzma" //Name will be changed only in 
shallowCopy.address.city = "Los Angeles"

// console.log(originalObj)
// console.log(shallowCopy)

// In the example above, originalObj contains a nested object address. 
// When creating a shallow copy using the spread operator { ...originalObj }, 
// the top-level properties (name and age) are duplicated into shallowCopy, 
// but the nested address object is not deeply copied. Instead, both originalObj
// and shallowCopy have a reference to the same address object. Therefore, 
// when modifying the city property of address in shallowCopy, the change also reflects in originalObj.

// Using Object.assign():

const object1 = { a: 1, b: 2 }
const object2 = { b: 3, c: 4}

// const combinedObj = Object.assign({}, object1, object2)

//Another Example
const targetObj = { a: 1 };
const sourceObj1 = { b: 2 };
const sourceObj2 = { c: 3 };

const modifiedTargetObj = Object.assign(targetObj, sourceObj1, sourceObj2)

// console.log(modifiedTargetObj)
// console.log(targetObj)
// In this example, the properties from sourceObj1 and sourceObj2 are copied to targetObj. 
// If any property in sourceObj1 or sourceObj2 has the same name as a property in targetObj, 
// the value in targetObj will be overwritten.
// The modifiedTargetObj variable will contain the modified targetObj after the properties 
// from the source objects are copied to it.

// console.log(modifiedTargetObj)

const fullnamename = {
  fname: "Mohsin",
  lname: "Manzoor"
}

const address = {
  city: "Pulwama",
  country: "India"
}

const address2 = {
  city2: "Riyad",
  country3: "Saudi Arabia"
}

const Details = {...fullnamename, ...address, ...address2}

// console.log(fullnamename)
// console.log(Details)

// Array of Objects
const arrayOfObjects = [
  {
    name: "Mohsin",
    age: 23,
    country: "India"
  },

  {
    namee: "John",
    age: 28,
    country: "USA"
  },

  {
    name: "Alice",
    age: 25,
    country: "Germany"
  }
]

// console.log(arrayOfObjects)

// Accessing an Object or Property of an Object.

// console.log(arrayOfObjects[1]) //Accesing second object using array index 1.
// console.log(arrayOfObjects[0].name) //Accessing name in the first object (Index 0).
// console.log(arrayOfObjects[2].country) // Accessing country in third Object which at Index 2.

// Object.keys(): This method gives us an array containing all the property names (keys) of an object.
const Users = {
  name: "Jhon",
  age: 29,
  city: "Dubai",
  email: "jhon@gmail.com"
}

const keys = Object.keys(Users)
// console.log(keys) //One way of output
// console.log(Object.keys(Users)) // Output will be array of Keys.

// Object.values(): This method gives us an array containing all the values of the properties of an object.
const values = Object.values(Users)
// console.log(values) //Output will be Array of Values.

//Object.entries(): This method gives us an array of arrays where each inner array contains a key-value pair from the object.
console.log(Object.entries(Users))

// hasOwnProperty() is used to check whether a specific key (property) is present in an object or not.

console.log(Users.hasOwnProperty(`city`)) // Output: True
console.log(Users.hasOwnProperty(`country`)) // Output: False