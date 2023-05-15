let rpsArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return choice
}

function scoreCheck(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"; 
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const winner = (scoreCheck(playerSelection, computerSelection));
    if (winner === "Tie") {
        return "It's a Tie!"
    } else if (winner === "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function userInput() {
    let checkInput = false;
    while(checkInput === false) {
        const userChoice = prompt("Rock Paper Scissor");
        if (userChoice === null) {
            continue;
        }
        const userLower = userChoice.toLowerCase();
        if (rpsArray.includes(userLower)) {
            checkInput = true;
            return userLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = userInput();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (scoreCheck(playerSelection, computerSelection) === "Player") {
            scorePlayer++ 
        } else if (scoreCheck(playerSelection, computerSelection) === "Computer") {
            scoreComputer++
        } 
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("You are the winner!");
    } else if (scorePlayer < scoreComputer) {
        console.log("You lose!");
    } else {
        console.log("We have a tie!");
    }
}

game();
