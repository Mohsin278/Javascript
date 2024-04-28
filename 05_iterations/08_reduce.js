// reduce() method
// The reduce() method is used to reduce the elements of an array to a single value. 
// It iterates over each element of the array and applies a function that accumulates a result based on the values encountered.

// const numbers = [1, 2, 3, 4]

// const sum = numbers.reduce( function (acc, curval) {
//   // console.log(`acc: ${acc} and curval: ${curval}`)
//   return acc + curval
// }, 0)

// // console.log(sum)

//Using arrow functio

// const sum = numbers.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0)


// console.log(sum)

// Shopian Cart Example

const shoppingCart = [
  {
    item: "T shirt",
    price: 599
  },

  {
    item: "Pant",
    price: 999
  },

  {
    item: "Mobile phone",
    price: 24000
  },

  {
    item: "Glases",
    price: 499
  }
]

const payableAmount = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(payableAmount)