function getcomputerchoice() {
  rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    return "rock";
  } else if (rand === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
var humanchoice = "";
var computerchoice = getcomputerchoice();
const buttons = document.querySelectorAll(".btns button");

var humanScore = 0;
var computerScore = 0;
const score = document.querySelector(".score");
const result = document.querySelector(".result-message");
const choice = document.querySelector(".choice");
function playround(humanchoice, computerchoice) {
  if (humanchoice === computerchoice) {
    result.textContent = "It's a tie! You both chose " + humanchoice + ".";
  } else if (
    (humanchoice === "rock" && computerchoice === "scissors") ||
    (humanchoice === "paper" && computerchoice === "rock") ||
    (humanchoice === "scissors" && computerchoice === "paper")
  ) {
    humanScore++;
    result.textContent =
      "You win! " + humanchoice + " beats " + computerchoice + ".";
  } else if (
    (humanchoice === "scissors" && computerchoice === "rock") ||
    (humanchoice === "rock" && computerchoice === "paper") ||
    (humanchoice === "paper" && computerchoice === "scissors")
  ) {
    computerScore++;
    result.textContent =
      "You lose! " + computerchoice + " beats " + humanchoice + ".";
  }
  choice.textContent = `You chose ${humanchoice}, computer chose ${computerchoice}.`;
  score.textContent = `Current Score: You ${humanScore} | Computer ${computerScore}.`;
  if (humanScore === 5) {
    result.textContent = "Congratulations! You won the game!";
    buttons.forEach(function (button) {
      button.disabled = true;
    });
  } else if (computerScore === 5) {
    result.textContent = "Better luck next time. The computer won.";
    buttons.forEach(function (button) {
      button.disabled = true;
    });
  }
}

function playgame() {
  if (humanScore < 5 && computerScore < 5) {
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        humanchoice = button.className;
        computerchoice = getcomputerchoice();
        playround(humanchoice, computerchoice);
      });
    });
  }
}
const playAgainButton = document.querySelector(".play-again");

playAgainButton.addEventListener("click", function () {
  location.reload();
  });

playgame();
