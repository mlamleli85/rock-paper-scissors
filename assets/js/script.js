// DOM elements declared as constants for easy access

const gameButtons = document.querySelectorAll(".control");
const playerScoreElement = document.getElementById("player-score");
const compScoreElement = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const compImage = document.getElementById("computer-image");
const messageElement = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/* Add event listeners to all buttons */

for (let button of gameButtons) {
  button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
  });
}

/*The function that runs the game logic */

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let compChoice = Math.floor(Math.random() * 3);
    compImage.src = `assets/images/${choices[compChoice]}.png`;
    compImage.alt = choices[compChoice];

    let result = checkWinner(choices[compChoice], choices[playerChoice]);

    updateScores(result);
}

/* Function to determine the winner of the game */

function checkWinner(compChoice, playerChoice) {
    if (compChoice === playerChoice) {
        return "draw";
    }

    if ((playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

/* Function to update the scores based on the result of the game */

function updateScores(result) {
    let pScore = parseInt(playerScoreElement.textContent);
    let cScore = parseInt(compScoreElement.textContent);

    if (result === "player") {
        playerScoreElement.textContent = ++pScore;
        messageElement.textContent = "Victory! You win this round!";
    } else if (result === "computer") {
        compScoreElement.textContent = ++cScore;
        messageElement.textContent = "Defeat! Computer wins this round!";
    } else {
        messageElement.textContent = "It's a draw!";
    }

}