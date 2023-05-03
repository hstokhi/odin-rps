function getComputerChoice() {
    var moves = ['Rock', 'Paper', 'Scissors'];
    var index = Math.floor(Math.random() * moves.length);
    return moves[index];
}
let score = 0
let computerScore = 0
const body = document.querySelector('body')
const results = document.createElement('p')
const runningScore = document.createElement('p')

function playRound(playerSelection) {
    //let playerSelection = prompt("Choose your move:");//
    let computerSelection = getComputerChoice();
    if (score == 5 || computerScore == 5) {
        location.reload()
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        results.textContent = "Tie"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        computerScore += 1
        results.textContent = "You lose. Paper beats Rock"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        score += 1
        results.textContent = "You win. Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        computerScore += 1
        results.textContent = "You lose. Scissors beats Paper"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        score += 1
        results.textContent = "You win. Scissors beats Paper"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == 'rock') {
        computerScore += 1
        results.textContent = "You lose. Rock beats Scissors"
    } else {
        score += 1
        results.textContent = "You win. Scissors beats Paper"
    }
    if (score == 5) {
        results.textContent = "YOU WIN!"
    } else if (computerScore == 5) {
        results.textContent = "YOU LOSE!"
    }
    runningScore.textContent = `Your Score: ${score} -------- Computer Score: ${computerScore}`
    body.appendChild(runningScore)
    body.appendChild(results)    
}

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => playRound('Rock'))
const paper = document.querySelector('.paper')
paper.addEventListener('click', () => playRound("Paper"))
const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => playRound("Scissors"))

