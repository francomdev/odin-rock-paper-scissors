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
    let playerChoice = ""
    $(".rock").click(() => {
        $(".rock").toggleClass("clicked");
        setTimeout( () => {$(".rock").toggleClass("clicked")}, 100);
        playerChoice = "rock";
        const computerChoice = getComputerChoice();
        $(".player").attr("src", "./images/rock.png");
        $(".computer").attr("src", "./images/"+computerChoice+".png");
        let roundResult = playRound(playerChoice, computerChoice);        
        if (roundResult[4] == "L"){
            computerScore += 1;
        } else if (roundResult[4] == "W") {
            playerScore += 1;
        }
        $(".score-player").text("Player Score: " + String(playerScore));
        $(".score-computer").text("Computer Score: " + String(computerScore));
        console.log(playerScore);
    });
    $(".paper").click(() => {
        $(".paper").toggleClass("clicked");
        setTimeout( () => {$(".paper").toggleClass("clicked")}, 100);
        playerChoice = "paper";
        const computerChoice = getComputerChoice();
        $(".player").attr("src", "./images/paper.png");
        $(".computer").attr("src", "./images/"+computerChoice+".png");
        let roundResult = playRound(playerChoice, computerChoice);        
        if (roundResult[4] == "L"){
            computerScore += 1;
        } else if (roundResult[4] == "W") {
            playerScore += 1;
        }
        $(".score-player").text("Player Score: " + String(playerScore));
        $(".score-computer").text("Computer Score: " + String(computerScore));
    });
    $(".scissors").click(() => {
        $(".scissors").toggleClass("clicked");
        setTimeout( () => {$(".scissors").toggleClass("clicked")}, 100);
        playerChoice = "scissors";
        const computerChoice = getComputerChoice();
        $(".player").attr("src", "./images/scissors.png");
        $(".computer").attr("src", "./images/"+computerChoice+".png");
        let roundResult = playRound(playerChoice, computerChoice);        
        if (roundResult[4] == "L"){
            computerScore += 1;
        } else if (roundResult[4] == "W") {
            playerScore += 1;
        }
        $(".score-player").text("Player Score: " + String(playerScore));
        $(".score-computer").text("Computer Score: " + String(computerScore));
    });
}

const playGame = game();

