// Store a game status element 
const gameStatusDisplay = document.querySelector('game-status');

// Declare variables that we will use to track the game state

// Use in case of an end scenario to pause the game 
let gameActive = true;

// To store current player here, to know whos turn it is
let currentPlayer = "x";