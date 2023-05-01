function getComputerChoice() {
    var moves = ['Rock', 'Paper', 'Scissors'];
    var index = Math.floor(Math.random() * moves.length);
    return moves[index];
}

function playRound() {
    let playerSelection = prompt("Choose your move:");
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        return "You lose. Paper beats Rock"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        return "You win. Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        return "You lose. Scissors beats Paper"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        return "You win. Scissors beats Paper"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == 'rock') {
        return "You lose. Rock beats Scissors"
    } else {return "You win. Scissors beats Paper"}
}

function game() {
    let i = 0;
    while (i < 5) {
        console.log(playRound());
        i++;
    }
}