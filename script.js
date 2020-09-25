
// get user choice

function playOption (event) {
    playGame(event.target.getAttribute("id"))

}

document.getElementById("rock").addEventListener("click", playOption);
document.getElementById("paper").addEventListener("click", playOption);
document.getElementById("scissors").addEventListener("click", playOption);

let userScore = 0;
let compScore = 0;

function reset() {
    userScore = 0;
    compScore = 0;


    let userScoreElement = document.getElementById("user-score");
    userScoreElement.innerHTML = userScore;

    let computerScoreElement = document.getElementById("computer-score");
    computerScoreElement.innerHTML = compScore;

    let computerChoiceElement = document.getElementById("computer-choice");
    computerChoiceElement.innerHTML = "Computer picks";


    let result = document.getElementById("result");
    result.innerHTML = "Make your move"
}

document.getElementById("reset-btn").addEventListener("click", reset);

// get computer choice & play game
function playGame(userChoice) {

    // get computer choice
    let computerChoice = Math.random(); // you can also do *3 and have 1,2 & 3 in the if stments

    let computerChoiceElement = document.getElementById("computer-choice");

    if (computerChoice < 0.34) {
        computerChoice = "rock";

    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";

    } else {
        computerChoice = "scissors";
    }
    computerChoiceElement.innerHTML = "Computer picks " + computerChoice;


    // calculate game outcome
    // First make the calcs and then display the results

    let result = document.getElementById("result");
    let userScoreElement = document.getElementById("user-score");
    let computerScoreElement = document.getElementById("computer-score");

    //play game: -1 = computer wins, 0 = draw, 1 = user wins
    const USER_WIN = 1;     // use these const to make it more readable in later stages
    const DRAW = 0
    const COMP_WIN = -1
    let outcome;

    if (userChoice === computerChoice) {
        outcome = DRAW;
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            outcome = USER_WIN;

        } else if (computerChoice === "paper") {
            outcome = COMP_WIN;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            outcome = COMP_WIN;

        } else if (computerChoice === "rock") {
            outcome = USER_WIN;
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            outcome = COMP_WIN;

        } else if (computerChoice === "paper") {
            outcome = USER_WIN;
        }
    }

    switch(outcome) {
        case COMP_WIN: // lose
            result.innerHTML = "You pick " + userChoice + ", you lose";
            computerScoreElement.innerHTML = ++compScore;
            break;
        case DRAW: // draw
            result.innerHTML = "It's a draw";
            break;
        case USER_WIN: // win
            result.innerHTML = "You pick " + userChoice + ", you win";
            userScoreElement.innerHTML = ++userScore; // ++ a la izquierda cambia el valor ANTES de usarlo, a la derecha DESPUES
            break;
    }
}

