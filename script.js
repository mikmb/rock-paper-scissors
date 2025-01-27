let playerScore = 0;
let computerScore = 0;
const playerInputButtons = document.querySelectorAll(".rps-button");

// getComputerChoice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) return "Rock";
  else if (randomNum == 1) return "Paper";
  else if (randomNum == 2) return "Scissors";
}

function disableRPSbuttons() {
  playerInputButtons.forEach((btn) => {
    btn.disabled = true;
    btn.style.backgroundColor = "#8a817c";
  });
}

function enableRPSbuttons() {
  playerInputButtons.forEach((btn) => (btn.disabled = false));
}

function showPlayAgainButton() {
  const playAgainBtn = document.getElementById("play-again-btn");
  playAgainBtn.style.display = "block";
}
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    playerScore += 1;
    result =
      "\n\nYou Win! " +
      playerChoice +
      " beats " +
      computerChoice +
      ".\n\n" +
      "Player Score: " +
      playerScore +
      "\nComputer Score: " +
      computerScore;

    if (playerScore === 5) {
      result += "\n\nYou won the game!\n\n";
      disableRPSbuttons();
      showPlayAgainButton();
    }
  } else if (playerChoice == computerChoice) {
    result +=
      "\n\nIt's a tie.\n\n" +
      "Player Score: " +
      playerScore +
      "\nComputer Score: " +
      computerScore;
  } else {
    computerScore += 1;

    result =
      "\n\nYou lose! " +
      computerChoice +
      " beats " +
      playerChoice +
      ".\n\n" +
      "Player Score: " +
      playerScore +
      "\nComputer Score: " +
      computerScore;

    if (computerScore == 5) {
      result += "\n\nComputer won the game!\n\n";

      disableRPSbuttons();
      showPlayAgainButton();
    }
  }

  document.getElementById("result").innerText = result;
}

// playGame();
playerInputButtons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.innerHTML);
  });
});
