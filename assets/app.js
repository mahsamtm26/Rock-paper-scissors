
const message = document.querySelector("#message")
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
    let resultMesage = "";
    

    if (playerChoice === computerChoice) {
        resultMesage = `🤝 It's a tie! You both chose ${playerChoice}.`
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
    
}




