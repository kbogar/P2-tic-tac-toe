// Store a game status element to easily use it later 
const gameStatusDisplay = document.querySelector('game-status');

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

// Set up the structure of game functions
function cellPlayed() {

}

function playerChange() {

}

function resultValidation() {

}

function cellClick() {

}

function restartGame() {

}

// Add event listeners to the game cells and restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.getElementById('game-restart-btn').addEventListener('click', restartGame);