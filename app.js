
const message = document.getElementById("message")
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const roundDisplay = document.getElementById("round");
const roundBtn = document.getElementById("round");


let playerScore = 0;
let computerScore = 0;
let round = 1;
const totalRounds = 3;

const play = (playerChoice) =>  {


    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice);
    let resultMessage = "";
    if (round > totalRounds) return;

    if (playerChoice === computerChoice) {
        resultMessage = `🤝 It's a tie! You both chose ${playerChoice}.`
    }else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        playerScore++;
        resultMessage = `✅ You win this round! ${playerChoice} beats ${computerChoice}.`;
    }else {
    computerScore++;
    resultMessage = `❌ You lose this round! ${computerChoice} beats ${playerChoice}.`;
    }

    message.innerHTML = resultMessage;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
};

const showFinalResult = () => {
    let finalMessage = "";
    if (playerScore > computerScore) {
        finalMessage = "🏆 You won the game!";
    } else if (playerScore < computerScore) {
        finalMessage = "💻 Computer wins the game!";
    } else {
        finalMessage = "🤝 It's a tie overall!";
    }

    message.textContent = finalMessage;
    restartBtn.style.display = "inline-block";
    }

const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    message.textContent = "Make your move!";
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    roundDisplay.textContent = 1;
    restartBtn.style.display = "none";
}







