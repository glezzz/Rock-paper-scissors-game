
// get user choice
document.getElementById("rock").addEventListener("click", function () {
    userChoice = "rock";
    playGame()

})
document.getElementById("paper").addEventListener("click", function () {
    userChoice = "paper";
    playGame()

})
document.getElementById("scissors").addEventListener("click", function () {
    userChoice = "scissors";
    playGame()

})

let userScore = 1;
let compScore = 1;

// get computer choice & play game
function playGame() {

    // get computer choice
    let computerChoice = Math.random(); // you can also do *3 and have 1,2 & 3 in the if stments

    if (computerChoice < 0.34) {
        computerChoice = "rock";
        document.getElementById("computer-choice").innerHTML = "Computer picks rock";

    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
        document.getElementById("computer-choice").innerHTML = "Computer picks paper";

    } else {
        computerChoice = "scissors";
        document.getElementById("computer-choice").innerHTML = "Computer picks scissors";
    }

    //play game
    if (userChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a draw";
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "You pick rock, you win";
            document.getElementById("user-score").innerHTML = userScore++;

        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "You pick rock, you lose";
            document.getElementById("computer-score").innerHTML = compScore++;

        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            document.getElementById("result").innerHTML = "You pick paper, you lose";
            document.getElementById("computer-score").innerHTML = compScore++;

        } else if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "You pick paper, you win";
            document.getElementById("user-score").innerHTML = userScore++;

        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("result").innerHTML = "You pick scissors, you lose";
            document.getElementById("computer-score").innerHTML = compScore++;

        } else if (computerChoice === "paper") {
            document.getElementById("result").innerHTML = "You pick scissors, you win";
            document.getElementById("user-score").innerHTML = userScore++;

        }

    }
}

