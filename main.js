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
    return str.length > 1
        ? str[0].toUpperCase() + str.slice(1).toLowerCase()
        : " ";
}

function playRound(userChoice, computerChoice) {
    /**
     * Receive two different string parameters.
     * Return a String according with the input selection userChoice (string)
     * and computerChoice (string), following the classic rules of the Rock
     * Paper Scissors game.
     */

    // The possible results are saved in three variables (string type)
    const tie = "It's a tie";
    const youWin =
        "You win! " +
        capitalize(userChoice) +
        " beats " +
        capitalize(computerChoice);
    const youLose =
        "You lose! " +
        capitalize(computerChoice) +
        " beats " +
        capitalize(userChoice);

    // The comparison is made parsing the userChoice to lowercase.
    // The tie and wining case scenarios are evaluated to return the respective
    // result message, otherwise (including different random user inputs) return
    // the youLose message.
    if (userChoice.toLowerCase() == computerChoice) {
        return tie;
    }
    if (
        (userChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
        (userChoice.toLowerCase() == "paper" && computerChoice == "rock") ||
        (userChoice.toLowerCase() == "scissors" && computerChoice == "paper")
    ) {
        return youWin;
    }

    return youLose;
}

function game() {
    /**
     * Run a loop, in which a round is played, the needed times til userScore or
     * computerScore reach a value of 3.
     */

    // Maximum score to reach until get a winner
    let maxWinningRounds = 3;

    // Numeric variables to keep record of the computer and user score.
    let userScore = 0;
    let computerScore = 0;

    // String variable to receive the user input via prompt().
    let userChoice = "";

    // String variable to save the result of the playRound function.
    let roundResult = "";

    while (userScore < maxWinningRounds && computerScore < maxWinningRounds) {
        userChoice = prompt("Select your movement: ");
        roundResult = playRound(userChoice, getComputerChoice());
        console.log(roundResult);

        // Check the fourth char of the string to determine who won the round and
        // add one point to the respective score counter.
        if (roundResult[4] == "w") {
            userScore++;
        }
        if (roundResult[4] == "l") {
            computerScore++;
        }
    }

    console.log("User: " + userScore);
    console.log("PC: " + computerScore);
}

