// A switch statement is another control flow statement used to perform different actions based on different conditions.
// It's often used as an alternative to a series of if...else if...else statements, especially when there are multiple possible conditions to check.

// The break statement is used to exit the switch statement once a match is found. If break is omitted, execution will continue to the next case.

let day = 8
let dayName

switch (day) {
  case 1:
    dayName = "Monday"
    break;

  case 2:
    dayName = "Tuesday"
    break;

  case 3:
    dayName ="Wednesday"
    break;

  case 4:
    dayName = "Thursday"
    break;

  case 5:
    dayName = "Friday"
    break;

  case 6:
    dayName = "Saturday"
    break;

  case 7:
    dayName = "Sunday"
    break;

  default:
    dayName = "Invalid day"
}

console.log(dayName)

//Another Example
const month = 1

switch(month){
    case 1:
      console.log("January")
      break

    case 2:
      console.log("February")
      break
    
    case 3:
      console.log("March")
      break

    default:
      console.log("Not Found")
}

// Example Using String
let fruit = "apple"
let taste

switch(fruit){
  case "orange":
    taste = "tangy"
    break

  case "banana":
    taste = "creamy"
    break

  case "apple":
    taste = "sweet"
    break

  case "lemon":
    taste = "sour"
    break

  default:
    taste = "unknown"

}

console.log(`the taste of ${fruit} is ${taste}.`)