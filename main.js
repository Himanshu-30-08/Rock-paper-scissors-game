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