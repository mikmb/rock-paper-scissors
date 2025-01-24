// getComputerChoice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) return "rock";
  else if (randomNum == 1) return "paper";
  else if (randomNum == 2) return "scissors";
}

// getHumanChoice
function getHumanChoice() {
  let answer = prompt(
    "Pick one: Rock, Paper, Scissors. Write your choice please:"
  ).toLowerCase();
  if (answer != "rock" && answer != "paper" && answer != "scissors") {
    alert("Please enter a valid input. Choices are: Rock, Paper, Scissors.");
    answer = getHumanChoice();
  }
  return answer;
}

let huamnScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(
      "It's tie.\nYour choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice
    );
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    alert(
      "Computer Win this round! Your choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice +
        "\n" +
        "Paper beats Rock!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    huamnScore++;
    alert(
      "You Win this round! Your choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice +
        "\n" +
        "Rock beats Scissors!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    huamnScore++;
    alert(
      "You Win this round! Your choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice +
        "\n" +
        "Paper beats Rock!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    alert(
      "Computer Win this round! Your choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice +
        "\n" +
        "Scissors beats Paper!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    huamnScore++;
    alert(
      "You Win this round! Your choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice +
        "\n" +
        "Scissors beats Paper!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    alert(
      "Computer Win this round! Your choice: " +
        humanChoice +
        ", Computer choice: " +
        computerChoice +
        "\n" +
        "Rock beats Scissors!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  }
}

function playGame() {
  alert("Best out of 5 rounds will win the Rock, Paper, Scissors Game!");
  for (let i = 0; i < 5; i++) {
    alert(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (huamnScore > computerScore) {
    alert(
      "Congrats! You're the winner of this game!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (huamnScore < computerScore) {
    alert(
      "You lost the game!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  } else if (huamnScore == computerScore) {
    alert(
      "It's a tie!\n" +
        "Your score: " +
        huamnScore +
        ", Computer score: " +
        computerScore
    );
  }
}

playGame();
