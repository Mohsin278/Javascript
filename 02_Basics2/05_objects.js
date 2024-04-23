// Destructuring is a convenient way to extract multiple properties from an object 
// or elements from an array and assign them to variables in a single statement
const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "Hitesh"
}

// Destructuring
const { courseInstructor, price, coursename } = course

// console.log(courseInstructor)
// console.log(coursename)
// console.log(price)

const person = {
  name: "Jhon",
  age: 30
}

// we can also assign default values while destructuring
const { name, age, country = "USA" } = person
// console.log(country)
// console.log(person)

const User = {
  userid: "Mohsin21",
  gender: "male",
  email: "mohsin@google.com"
}

// we can rename variables while destructuring
const { userid: fullname, gender, email: mailid } = User
console.log(mailid)
console.log(fullname)

