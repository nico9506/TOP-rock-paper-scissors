function getComputerChoice() {
    /**
     * Randomly, return one of the three possible values.
     * This result represent the computer selection.
     */

    const choices = ['rock', 'paper', 'scissors'];

    return choices[(Math.floor(Math.random() * 3))];
}

function capitalize(str) {
    /**
     * Capitalize a String (str). Return a new string which its first word is 
     * capitalized and the rest of the initial string is concatenated as lowercase.
     */
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(userChoice, computerChoice) {
    /**
     * Return a String according with the input selection userChoice (string)
     * and computerChoice (string), following the classic rules of the Rock 
     * Paper Scissors game.
     */

    const tie = 'It\'s a tie';
    const youWin = 'You win! ' + capitalize(userChoice) + ' beats ' + capitalize(computerChoice);
    const youLose = 'You lose! ' + capitalize(computerChoice) + ' beats ' + capitalize(userChoice);

    if (userChoice.toLowerCase() == computerChoice) {
        return tie;
    }
    if (
        (userChoice.toLowerCase() == 'rock' && computerChoice == 'scissors') ||
        (userChoice.toLowerCase() == 'paper' && computerChoice == 'rock') ||
        (userChoice.toLowerCase() == 'scissors' && computerChoice == 'paper')
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

    let userScore = 0;
    let computerScore = 0;
    let userChoice = '';
    let resultRound = '';

    while (userScore < 3 && computerScore < 3) {
        userChoice = prompt('Select your movement: ');
        resultRound = playRound(userChoice, getComputerChoice());
        console.log(resultRound);

        if (resultRound[4] == 'w') {userScore++;}
        if (resultRound[4] == 'l') {computerScore++;}
    }

    console.log('User: ' + userScore);
    console.log('PC: ' + computerScore);
}

game();