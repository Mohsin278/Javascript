let randomNumber = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

//Guesses will be stored here.
let prevGuess = []
let numGuess = 1 // Number of guesses by the user, only 10 guess starting from 1.

let playGame = true

if(playGame) {
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please Enter valid Number')
    } else {
      prevGuess.push(guess)
      if( numGuess === 11 ) {
          cleanUpGuess(guess)
          displayMessage(`Game Over. Random Number was ${randomNumber}`)
          endGame()
      } else {
          cleanUpGuess(guess)
          checkGuess(guess)
      }
    }
}

function checkGuess(guess) {
      if (guess === randomNumber) {
          displayMessage(`You Guessed it right`)
          endGame()
      } else if ( guess < randomNumber) {
          displayMessage(`Number is tooo lowww`)
      } else {
          displayMessage(`Number is tooo highhh`)
      }
}

function cleanUpGuess(guess) {
      userInput.value = ''
      guessSlot.innerHTML += `${guess}, `
      numGuess++
      remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
      lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
      userInput.value = ''
      userInput.setAttribute('disabled', '')
      p.classList.add('button')
      p.innerHTML = '<h2 id = "newgame">Start New Game<h2>'
      startOver.appendChild(p)
      playGame = false
      newGame()
}

function newGame() {
      const newGame = document.querySelector('#newgame')
      newGame.addEventListener('click', function() {
          randomNumber = parseInt(Math.random()*100 + 1)
          prevGuess = []
          numGuess = 1
          guessSlot.innerHTML = ''
          remaining.innerHTML = `${11 - numGuess},  `
          userInput.removeAttribute('disabled')
          startOver.removeChild(p)

          playGame = true
          
      })
}