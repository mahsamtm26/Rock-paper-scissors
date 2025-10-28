
const message = document.getElementById("message");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const roundDisplay = document.getElementById("round");
const totalRoundsDisplay = document.getElementById("totalRounds");
const computerHand = document.getElementById("computerHand");
const restartBtn = document.getElementById("restartBtn");
const startBtn = document.getElementById("startBtn");
const roundSelect = document.getElementById("roundCount");

let playerScore = 0;
let computerScore = 0;
let round = 0;
let totalRounds = 0;
let gameActive = false;

// start game

function startGame() {
  totalRounds = parseInt(roundSelect.value);
  playerScore = 0;
  computerScore = 0;
  round = 1;
  gameActive = true;
 
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  roundDisplay.textContent = 1;
  totalRoundsDisplay.textContent = totalRounds;
  message.textContent = "Make your move!";
  computerHand.src = "./assets/images/question.png";
  restartBtn.style.display = "none";

  enableHands();
}

// playe Choice
const play = (playerChoice) => {
  if (!gameActive) return; 

  removeScoreAnimations();
  setSelectedHandGlow(playerChoice);

//   computer choise
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  computerHand.classList.add('shaking');

  setTimeout(() => {
    computerHand.classList.remove("shaking")
      //show computer choise
  computerHand.src = `./assets/images/${computerChoice.toLowerCase()}.png`;
  },200)



  // result
  let resultMessage = "";
  let winner = null
  if (playerChoice === computerChoice) {
    resultMessage = `🤝 It's a tie! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    winner = "player"
    resultMessage = `✅ You win this round! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    winner = "computer";
    resultMessage = `❌ You lose this round! ${computerChoice} beats ${playerChoice}.`;
  }

  //show result after each round
  message.textContent = resultMessage;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (winner === 'player') {
            playerScoreDisplay.classList.add('player-score-win');
        } else if (winner === 'computer') {
            computerScoreDisplay.classList.add('computer-score-win');
        }

  // after each round of checking
  if (round === totalRounds) {
    gameActive = false;
    setTimeout(showFinalResult, 2000);
    disableHands();
  } else {
    round++;
    setTimeout(() => {
        roundDisplay.textContent = round;
    message.textContent = "Make your move!";
    computerHand.src = "./assets/images/question.png";
    document.getElementById(playerChoice.toLowerCase()).classList.remove("selected");
    },2000)
    
    };
  }

//Show Final Result
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
  removeScoreAnimations();
  disableHands();
   document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove("selected");});
}

// restart game
const restartGame = () => {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  totalRounds = 0;
  removeScoreAnimations();
  document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove("selected");
    });
  gameActive = false;

  message.textContent = "Select number of rounds and start the game!";
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  roundDisplay.textContent = 0;
  totalRoundsDisplay.textContent = 0;
  computerHand.src = "./assets/images/question.png";
  restartBtn.style.display = "none";

  enableHands();
}

const setSelectedHandGlow = (playerChoice) => {
    document.querySelectorAll(".hand").forEach(hand => {
        hand.classList.remove("selected")
    });

    const selectedHand = document.getElementById(playerChoice.toLowerCase());
    if (selectedHand) {
        selectedHand.classList.add("selected");
    }
}

const removeScoreAnimations = () => {
    playerScoreDisplay.classList.remove('player-score-win');
    computerScoreDisplay.classList.remove('computer-score-win');
}

// disable Hands
const disableHands= () => {
  document.querySelectorAll(".hand").forEach(hand => {
    hand.style.pointerEvents = "none";
  });
}

// enable Hands
const enableHands = () => {
  document.querySelectorAll(".hand").forEach(hand => {
    hand.style.pointerEvents = "auto";
  });
}
