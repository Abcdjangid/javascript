const buttons = document.querySelectorAll("button");
const Result = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

const choice = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    const result = getResult(playerChoice, computerChoice);

    if (result === 'You win!') {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
    
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    Result.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

function getResult(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
