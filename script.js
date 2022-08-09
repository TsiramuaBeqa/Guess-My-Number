let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let message = document.querySelector(".message")
let number = document.querySelector(".number")
let body = document.querySelector("body")
let userHigh = document.querySelector(".highscore")
let userScore = document.querySelector(".score")




document.querySelector(".check").addEventListener("click", function() {

  const userInput = Number(document.querySelector(".user-input").value)

  if (!userInput) {
    message.textContent = "Not Number"
  } 
  
  else if (userInput === secretNumber) {
    message.textContent = "Correct Number"
    number.textContent = secretNumber
    body.style.backgroundColor = "green"

    if (score > highscore) {
      highscore = score
      userHigh.textContent = highscore
    }
  }

  else if (userInput !== secretNumber) {
    if (score > 1) {
      message.textContent = userInput > secretNumber ? "Too high" : "Too low"
      score--
      userScore.textContent = score
    } else {
      message.textContent = "You Lose!"
    }
  }
})


document.querySelector(".again").addEventListener("click", function() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  userScore.textContent = score
  message.textContent = "Start Guessing..."
  body.style.backgroundColor = "#222"
  number.textContent = "?"
  document.querySelector(".user-input").value = ""
})