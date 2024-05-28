let randomNumber = Math.floor(Math.random() * 100 + 1)
const submitBtn = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const prevGuesses = document.querySelector('.pre-guesses')
const remainingGuesses = document.querySelector('.guessesRemained')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const btn = document.createElement('button')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateUserGuess(guess)
  })
}

function validateUserGuess(guess) {
  if(!guess) {
    alert('Please Enter a valid Number')
  } else if(guess < 1) {
    alert('Please Enter a Number Greater than 1')
  } else if (guess > 100) {
    alert('Please Enter a Number less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuess === 11) {
      updateGuessDisplay(guess)
      showFeedbackMessage(`Game over, Random number was ${randomNumber}`)
      terminateGame()
    } else {
      updateGuessDisplay(guess)
      evaluateGuess(guess)
    }
  }
}

function evaluateGuess(guess) {
  if(guess === randomNumber) {
    showFeedbackMessage(`You Guessed it right`)
    terminateGame()
  } else if (guess < randomNumber) {
    showFeedbackMessage(`Number is too low`)
  } else if (guess > randomNumber) {
    showFeedbackMessage(`Number is too high`)
  }
}

function updateGuessDisplay(guess) {
  userInput.value = ''
  prevGuesses.innerHTML += `${guess}, `
  numGuess++
  remainingGuesses.innerText = `${11 - numGuess}`
}

function showFeedbackMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function terminateGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  btn.classList.add('newButton')
  btn.innerHTML = 'Start New Game'
  startOver.appendChild(btn)
  playGame = false
  initializedNewGame()
}

function initializedNewGame() {
  const newGameBtn = document.querySelector('.newButton')
  newGameBtn.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100 + 1)
    prevGuess = []
    prevGuesses.innerHTML = ''
    remainingGuesses.innerHTML = ''
    userInput.removeAttribute('disabled')
    startOver.removeChild(btn)
    playGame = 1
    lowOrHigh.innerHTML = ''
  })
}