
// const buttons = document.querySelectorAll('.button')
// const body = document.body
// const h1 = document.querySelector('.text')
// const h2 = document.querySelector('.h2')
// console.log(h1, h2);

// buttons.forEach( button => {
//   // console.log(button)
//   button.addEventListener('click', function(event) {
//     console.log(event)
//     console.log(event.target)
    
//     switch (event.target.id) { 
//       case 'grey':
//         body.style.backgroundColor = event.target.id
//         h1.style.color = '#fff'
//         h2.style.color = '#fff'
//         break

//       case 'white':
//         body.style.backgroundColor = event.target.id
//         h1.style.color = '#111'
//         h2.style.color = '#111'
//         break
      
//       case 'blue':
//         body.style.backgroundColor = event.target.id
//         h1.style.color = 'red'
//         h2.style.color = 'red'
//         break

//       case 'yellow':
//         body.style.backgroundColor = event.target.id
//         h1.style.color = 'blue'
//         h2.style.color = 'blue'
//         break

//       default: body.style.backgroundColor = '#414141'
//         break
//     }
//   })
// })

const buttons = document.querySelectorAll('.button')
const body = document.body
const h1 = document.querySelector('.text')
const h2 = document.querySelector('.h2')

buttons.forEach( button => {
  console.log(button)
  button.addEventListener('click', function(event) {
    console.log(event)
    console.log(event.target)

    if(event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id
       h1.style.color = 'aquamarine'
       h2.style.color = 'aquamarine'
    }

    if(event.target.id === 'white') {
      body.style.backgroundColor = event.target.id
      h1.style.color = 'black'
      h2.style.color = 'black'
    }

    if(event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id
      h1.style.color = 'red'
      h2.style.color = 'red'
    }

    if(event.target.id  === 'yellow') {
      body.style.backgroundColor = event.target.id
      h1.style.color = 'blue'
      h2.style.color = 'blue'
    }
  })
})
