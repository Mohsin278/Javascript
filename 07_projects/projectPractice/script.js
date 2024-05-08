const body = document.body
const button = document.querySelector('button')

button.addEventListener('click', function() {
  if (body.style.backgroundColor === 'white') {
      body.style.backgroundColor = 'black'
      
  } else {
    body.style.backgroundColor = 'white'
    
  }
})