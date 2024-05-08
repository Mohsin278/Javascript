let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const prevGues = document.querySelector('.pre-guesses')
const remainedGuesses = document.querySelector('.guessesRemained')
const lowOrHigh = document.querySelector('.lowOrHi')
const resetDiv = document.querySelector('.resultParas')

// console.log(lowOrHigh)
btn = document.createElement('button')


//Guess will be stored here in the Array.
let prevGueses = []

//Total number of Guesses
let numGuess = 1

let playgame = true

if(playgame){
  submit.addEventListener('click', function(e) {
    e.preventDefault()
   const guess = parseInt(userInput.value)
  //  console.log(guess)
   validateGuess(guess)
  })
}


function validateGuess(guess) {
  if(isNaN(guess) || guess<1 || guess > 100) {
    alert('Please Enter a valid Number')
  } else {
    prevGueses.push(guess)
    if(numGuess > 10) {
      cleanUpGuess(guess)
      displayMessage(`Game Over, random Number was ${randomNumber}`)
      endGame()
    } else {
      cleanUpGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage(`You Guessed it Right`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`)
  } else {
    displayMessage(`Number is too high`)
  }
}

function cleanUpGuess(guess) {
    userInput.value = ''
    prevGues.innerHTML += `${guess}, `
    numGuess++
    remainedGuesses.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  btn.className = 'button'
  btn.innerHTML = '<h5 id = "newgame">Start New Game</h5>'
  resetDiv.appendChild(btn)
  playgame = false
  newGame()

}

function newGame() {
  const newGameButton = document.querySelector('#newgame')
  newGameButton.addEventListener('click', function(){
    randomNumber = parseInt(Math.random()*100 +1)
    prevGueses = []
    numGuess = 1
    prevGues.innerHTML = ''
    remainedGuesses.innerHTML = `${11, numGuess}`
    userInput.removeAttribute('disabled')
    resetDiv.remove(btn)

    playgame = true
  })

}