const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerChoice, computerChoice) {
    switch(playerChoice) {
        case "rock":
            if (computerChoice == "paper") {
                return "You Lose! Paper beats Rock.";
            } else if (computerChoice == "scissors") {
                return "You Win! Rock beats Scissors.";
            } else {
                return "It's a draw!";
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                return "You Lose! Scissors beats Paper.";
            } else if (computerChoice == "rock") {
                return "You Win! Paper beats Rock.";
            } else {
                return "It's a draw!!!";
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                return "You Lose! Rock beats Scissors.";
            } else if (computerChoice == "paper") {
                return "You Win! Scissors beats Paper.";
            } else {
                return "It's a draw!!!";
            }
            break;
    }
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i < 5; i++){
        let playerChoice = prompt("Pick rock, paper or scissors: ").toLowerCase();
        const computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);        
        console.log(roundResult);
        if (roundResult[4] == "L"){
            computerScore += 1;
        } else if (roundResult[4] == "W") {
            playerScore += 1;
        }
    }
    console.log("Player Score: " + playerScore + " | Computer Score:" + computerScore);
}

const playGame = game();









