////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    console.log("player chose " + playerMove);
    console.log("computer chose " + computerMove);
    if ( ((playerMove === 'rock') && (computerMove === 'scissors')) || ((playerMove === 'paper') && (computerMove === 'rock')) || ((playerMove === 'scissors') && (computerMove === 'paper')) ) {
        winner = 'player'; console.log("player wins.")
    } else if (playerMove === computerMove) {
        winner = 'tie'; console.log("it's a tie.")
    }
    else {
        winner = 'computer'; console.log("computer wins.")
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    function play(winner) { var winner = getWinner(getPlayerMove(),getComputerMove()) };

    while (playerWins < 5 || computerWins < 5) {

    play();

    if (winner === 'player') {
        playerWins++;
    } else if (winner === 'computer') {
        computerWins++;
    } else { 
        console.log("Play again.");
    }
    return [playerWins, computerWins];
};
}

playToFive();