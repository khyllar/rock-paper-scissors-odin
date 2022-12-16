function getComputerChoice() {
    const rpsArray = ["rock", "paper", "scissors"];
    const arrayIndex = Math.floor(Math.random() * rpsArray.length);
    choice = (arrayIndex, rpsArray[arrayIndex]);
    return choice
}

//function playRound(playerSelection, computerSelection) {
//    if (
//        playerSelection === "rock" && computerSelection === 2 ||
//        playerSelection === "paper" && computerSelection === 0 ||
//        playerSelection === "scissors" && computerSelection === 1); {
//            return true;
//    } 
//}

//function game() {
//    if (playerSelection === computerSelection) {
//        return("It's a tie!")
//    }
//}

//const playerSelection = window.prompt("rock, paper, or scissors: ")
//const computerSelection = getComputerChoice();
console.log(getComputerChoice());
