// Global variables declaration
let userScore = 0;
let pcScore = 0;
const maxPoints = 3;

let subtitle = document.getElementById("sub-title");
let userWeaponImg = document.getElementById("user-weapon-img");
let pcWeaponImg = document.getElementById("pc-weapon-img");
let userWeaponText = document.getElementById("user-weapon-text");
let pcWeaponText = document.getElementById("pc-weapon-text");
let score = document.getElementById("score");

let rockBtn = document.getElementById("rock-button");
let paperBtn = document.getElementById("paper-button");
let scissorsBtn = document.getElementById("scissors-button");
let restartBtn = document.getElementById("restart-button");

restartBtn.addEventListener("click", resetGame);
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    /**
     * Randomly, return one of the three possible values between Rock, Paper
     * and Scissors.
     * This result represent the computer selection.
     */

    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
    /**
     * Capitalize a String (str). Return a new string which its first word is
     * capitalized and the rest of the initial string is concatenated as
     * lowercase.
     * It's included only for printing and formatting purposes.
     */
    return str.length > 1 ? str[0].toUpperCase() + str.slice(1) : " ";
}

function playRound(userChoice, computerChoice) {
    /**
     * Receive two different string parameters.
     * Update global variables for printing them on the Interface
     * Add +1 to the winning-round player score and check the score
     */
    if (checkScore()) return;

    const tieMsg = "Tie!";
    const winMsg = "You won this round!";
    const pcWinMsg = "Machines won the round!";

    // Pick the correct class image to update the interface
    cleanImgClasses();
    userWeaponImg.classList.add(getClassImage(userChoice));
    pcWeaponImg.classList.add(getClassImage(computerChoice));

    userWeaponText.innerHTML = capitalize(userChoice);
    pcWeaponText.innerHTML = capitalize(computerChoice);

    // The comparison is made parsing the userChoice to lowercase.
    // The tie and wining case scenarios are evaluated to return the respective
    // result message, otherwise (including different random user inputs) return
    // the youLose message.
    if (userChoice == computerChoice) {
        console.log(tieMsg);
        subtitle.innerHTML = tieMsg;
        score.innerHTML = "Player: " + userScore + " - Machines: " + pcScore;
        return;
    }
    if (
        (userChoice == "rock" && computerChoice == "scissors") ||
        (userChoice == "paper" && computerChoice == "rock") ||
        (userChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log(winMsg);
        subtitle.innerHTML = winMsg;
        userScore++;
        score.innerHTML = "Player: " + userScore + " - Machines: " + pcScore;
        checkScore();
        return;
    }

    console.log(pcWinMsg);
    subtitle.innerHTML = pcWinMsg;
    pcScore++;
    score.innerHTML = "Player: " + userScore + " - Machines: " + pcScore;
    checkScore();
    return;
}

function checkScore() {
    /**
     * Check if userScore or pcScore are greater or equal than maxPoints to
     * finalize the game
     */

    if (userScore >= maxPoints || pcScore >= maxPoints) {
        // removeEventListeners();

        if (userScore > pcScore) {
            subtitle.innerHTML = "Congrats! You've beaten the machines!";
            userWeaponText.innerHTML = "Winner!";
            pcWeaponText.innerHTML = "Beaten!";
        } else {
            subtitle.innerHTML = "You've lost against the machines!";
            userWeaponText.innerHTML = "Beaten!";
            pcWeaponText.innerHTML = "Winner!";
        }
        return true;
    }
    return false;
}

function cleanImgClasses() {
    userWeaponImg.classList.remove(
        "img-rock",
        "img-paper",
        "img-scissors",
        "img-rps"
    );
    pcWeaponImg.classList.remove(
        "img-rock",
        "img-paper",
        "img-scissors",
        "img-pc"
    );
}

function getClassImage(weapon) {
    if (weapon == "rock") return "img-rock";
    if (weapon == "paper") return "img-paper";
    if (weapon == "scissors") return "img-scissors";
}

function resetGame() {
    userScore = 0;
    pcScore = 0;
    subtitle.innerHTML = "Pick your Weapon!";
    cleanImgClasses();
    userWeaponImg.classList.add("img-rps");
    pcWeaponImg.classList.add("img-pc");
    userWeaponText.innerHTML = "";
    pcWeaponText.innerHTML = "";
    score.innerHTML = '<a href="https://github.com/nico9506/">nico9506</a>';
}

// Initialize the game
resetGame();
