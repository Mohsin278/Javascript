// const coding = ["Java", "Python", "Python", "Javascript", "CPP"]

// const values = coding.forEach( (item) =>{
//     console.log(item)
//     return item
// } )

// console.log(values);
// for each does not return anything

// ***** filter() method *****//
// The filter() method is used to create a new array with all elements that pass the test implemented 
// by the provided function. It doesn't mutate the original array; instead, it returns a new array containing 
// only the elements that satisfy the condition specified in the callback function.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const greaterNumbs = numbers.filter( (num) => num > 4 )
// console.log(greaterNumbs)
// console.log(Array.isArray(greaterNumbs))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenNumbers = numbers.filter( num => num % 2 === 0) // if we write without curly braces it will directly return.
// console.log(evenNumbers)
// But if we write curly braces means scope {} then we have to write return Keyword it will give an empty array.

// const oddNumbers = numbers.filter( (num) => { 
//   return num % 2 != 0  // Explicit return
// })
// console.log(oddNumbers)


// we use the "for each" to perform the same task.
// const evenNumbs = []
// numbers.forEach( (numb) => {
//   if( numb % 2 === 0) {
//       newNumbs.push(numb)
//   }
// })

// console.log(evenNumbs)

// const oddNumbs = []
//  numbers.forEach( (num) => {
//   if( num % 2 != 0){
//       oddNumbs.push(num)
//   }
//  })

//  console.log(oddNumbs)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBook = books.filter( bk => bk.genre === 'Science') // we did't open scope "{}" so no need to write return keyword

// console.log(userBook)

const userNeeds = books.filter( (book) => { 
  return book.publish < 1995 && book.genre === 'History'}) // Here we opend scope "{}", so must write return keyword

console.log(userNeeds)