// Dates
let currentDate = new Date()

// console.log(currentDate.toString())
// console.log(currentDate.toDateString())
// console.log(currentDate.toLocaleString())
// console.log(typeof currentDate)

// 2. Specifying Date and Time
// You can also create a Date object by passing arguments specifying the year, month, day, hour, minute, second, and millisecond.

let specificcDate = new Date (2024, 1, 24, 12, 30, 0, 0)
let specificcDateOne = new Date (2024, 4, 3)

// console.log(specificcDate.toLocaleString())
// console.log(specificcDateOne.toLocaleString())

// new Date(2024, 1, 24, 12, 30, 0, 0);: This line creates a new Date object with the specified parameters:

// 2024: Specifies the year (full four-digit year).
// 1: Specifies the month. Remember, months are zero-based in JavaScript, so 1 represents February.
// 24: Specifies the day of the month.
// 12: Specifies the hour (in 24-hour format).
// 30: Specifies the minutes.
// 0: Specifies the seconds.
// 0: Specifies the milliseconds.

let myCreatedDate = new Date.getTime()
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = new Date(2024, 0, 24, 11, 30, 0, 0)

// console.log(myTimeStamp.getTime())
// console.log(myCreatedDate.getTime())

