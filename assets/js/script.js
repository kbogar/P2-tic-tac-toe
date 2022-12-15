// Store a game status element to easily use it later 
const gameStatusDisplay = document.querySelector('.game-status');

// Declare variables that we will use to track the game state

// Use in case of an end scenario to pause the game 
let gameActive = true;

// To store current player here, to know whos turn it is
let currentPlayer = "x";

/**
 * To store current game state here in form of empty strings in an array will allow us to track
 * played cells and validate the game state later on
 */
let gameState = ["", "", "", "", "", "", "", "", ""];

/**
 * Declare messages what we will display to the user during the game. Using an arrow function
 * here a new message gets created with a current player.
 */
const winMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `It is a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Set initial message to let the players know whose turn it is
gameStatusDisplay.innerHTML = currentPlayerTurn();

// set winning conditions
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 5]
];

// Set up the structure of game functions

//we need to update our internal game state to reflect the played move and UI
function cellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function playerChange() {

}

function resultValidation() {

}

/**
 * We need to check if the clicked cell has already been clicked and if it hasnt we need to
 * continue the game flow from here
 *  */ 
function cellClick(clickedCellEvent) {
    // we save the clicked html element in a variable
    const clickedCell = clickedCellEvent.target;
    // we grab the cell index attribute from clicked cell to identifie where it is
    const clickedCellIndex = parseInt(clickedCell.getAttribute('cell-index'));
    // check whether the call has already been played or if the game is paused
    // if either of those is true we will ignore the click
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    // if all is in order we will proceed with the game flow
    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

function restartGame() {

}

// Add event listeners to the game cells and restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.getElementById('game-restart-btn').addEventListener('click', restartGame);