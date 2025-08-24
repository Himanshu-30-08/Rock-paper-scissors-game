function getcomputerchoice() {
    rand=Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gethumanchoice() {
    let choice = prompt("Enter rock, paper or scissors: ").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return gethumanchoice();
    }
}
var humanScore = 0;
var computerScore = 0;

function playround(humanchoice, computerchoice) {
    if (humanchoice === computerchoice) {
        console.log("Tie! You both chose " + humanchoice + ".");
        console.log("Current Score: You " + humanScore + " Computer " + computerScore + ".");
    } else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanchoice + " beats " + computerchoice + ".");
        console.log("Current Score: You " + humanScore + " Computer " + computerScore + ".");
    } else {
        computerScore++;
        console.log("You lose! " + computerchoice + " beats " + humanchoice + ".");
        console.log("Current Score: You " + humanScore + " Computer " + computerScore + ".");
    }
}
playround(gethumanchoice(), getcomputerchoice());