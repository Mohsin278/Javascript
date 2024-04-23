// singleton
Object.create

// Object literals 

const JsUser = {
  "name": "Mohsin", // name is key here and Actually these keys are array like "name", "age" etc
  age: 18,
  location: "Kashmir",
  "email": "mohsin@Google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "mohsin21@gmail.com"
JsUser.name = "Mohsin Manzoor"

// console.log(JsUser.email)
// console.log(JsUser.name)

// console.log(JsUser["name"])
// console.log(JsUser["age"])

const User2 = {
  "name": "Fida",
  age: 20,
  location: "Shopian",
  email: "examplemail@Google.com",
  isLoggedIn: true,
  lastLoginDays: ["Friday", "Sunday"]
}

// console.log(User2["name"])
// console.log(User2.email)

// To change value of object key

User2.isLoggedIn = false
// console.log(User2.isLoggedIn)

Object.freeze(User2)

JsUser.age = 23
// console.log(User2["age"]) // So, here age cannot be changed because I have Freeze the User2 Object

// Adding one more data in JsUser Object
// JsUser.surname = "Wagay"
// console.log(JsUser["surname"])

// JsUser.website = "www.demosite.com"
// console.log(JsUser["website"])

JsUser.greeting = function(){
  console.log(`Hello! JS User`)
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS User,${this.name}`)
}

  console.log(JsUser.greeting())
  console.log(JsUser.greetingTwo())
