function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[randomIndex];
}

function getPlayerChoice() {
    playerPrompt = prompt('Rock, Paper or Scissors? ')
    allLower = playerPrompt.toLowerCase();
    return allLower
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'player';
        }
        else if (computerSelection === 'paper') {
            return 'computer';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'player';
        }
        else if (computerSelection === 'scissors') {
            return 'computer';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'player';
        }
        else if (computerSelection === 'rock') {
            return 'computer'
        }
    }
    return 'tie';
}    

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i+1}: ${roundResult}`);

        if (roundResult === 'player') {
            playerScore++;
        }
        else if (roundResult === 'computer') {
            computerScore++;
        }
    }
    
    console.log(`Final score: Player ${playerScore} - ${computerScore} Computer`);

    if (playerScore > computerScore) {
        console.log('Congratulations! You win!');
    }
    else if (computerScore > playerScore) {
        console.log('Sorry, you lost. Better luck next time!');
    }
    else {
        console.log('It was a tie game!');
    }
}

window.onload = function() { /*this holds back your javascript from loading until all your HTML and CSS has loaded first*/
    let rock = document.querySelector('.rock');
    rock.onclick = () => alert('rock');
};

let playerScore = 0;
let computerScore = 0;
/*game()*/
