import '../scss/main.scss';
import cards from './modules/cards';
import deal from './modules/deal';
import { getScores, checkScore, checkSplit } from './modules/scoring';
import AIHelper from './modules/AIHelper';
import { hideUIElement, revealUIElement, toggleUIElement } from './modules/UIHelper';
import modal from './modules/modal';

// DOM elements
const playDOM = document.getElementById('play');
const hitDOM = document.getElementById('hit');
const standDOM = document.getElementById('stand');
const splitDOM = document.getElementById('split');
const computerScoreWrapperDOM = document.getElementById('computerScore-wrapper');
const computerScoreDOM = document.getElementById('computerScore');
const playerScoreDOM = document.getElementById('playerScore');
const incrementDOM = document.getElementById('increment');
const decrementDOM = document.getElementById('decrement');
const bankDOM = document.getElementById('bank');
const currentBetDOM = document.getElementById('current-bet');

let bank = 30;
let currentBet = 5;
let controlsEnabled = true;
let bettingEnabled = true;

const deck = [];
let hands = [
  {
    name: 'Computer',
    cards: [],
  },
  {
    name: 'Player',
    cards: [],
  },
];

const renderScore = function renderScore(values) { // Outputs the scores to screen
  computerScoreDOM.innerHTML = values[0];
  playerScoreDOM.innerHTML = values[1];
};
const updateCurrentBet = function updateCurrentBet() { // Updates the current bet to the screen
  currentBetDOM.innerHTML = currentBet;
};
const updateBank = function updateBank() {
  bankDOM.innerHTML = bank;
};
const toggleBetting = function toggleBetting() {
  bettingEnabled = !bettingEnabled;
  toggleUIElement(incrementDOM);
  toggleUIElement(decrementDOM);
};

const startGame = function startGame() {
  updateCurrentBet();
  updateBank();
  hideUIElement(computerScoreWrapperDOM);
  controlsEnabled = true;

  // discard any existing cards
  hands.forEach((hand) => {
    hand.cards.length = 0;
  });

  // deal() removes cards from the deck and adds them to a player array
  deal(hands, 0, deck, 1, false);
  deal(hands, 0, deck, 1, true);
  deal(hands, 1, deck, 2, true);

  // display the dealt cards in DOM
  cards.createUI(hands[0].cards, playerComputer);
  cards.createUI(hands[1].cards, playerHuman);

  const checkPlayerScoreData = checkScore(hands, 1); // Receive array with all score data
  if (checkPlayerScoreData[2]) {
    hands = checkPlayerScoreData[2]; // Update hands array in case of double ace
  }
  renderScore(getScores(hands)); // Update scores last in case of new hands data

  // Render the player score in DOM
  renderScore(getScores(hands));

  // Check for split
  if (checkSplit(hands, 1)) {
    revealUIElement(splitDOM); // Display option to split
  }
};

const initNewGame = function initNewGame() {
  cards.createDeck(deck, true); // Create new deck, cards face up
  cards.shuffleDeck(deck);
  updateBank();
  updateCurrentBet();
};

const calculateBank = function calculateBank(AIResponse) {
  console.log(`calculateBank fired and received: ${AIResponse}`);
  if (AIResponse[1] === 'win') {
    bank += currentBet;
  }
  if (AIResponse[1] === 'lose' || AIResponse[1] === 'bust') {
    bank -= currentBet;
    if (currentBet > bank) {
      currentBet = bank;
      updateCurrentBet();
    }
  }
  // if (AIResponse[1] === 'draw') {
  //   console.log('It\'s a draw!');
  // }
  if (bank > 0) {
    modal.setModal(AIResponse[2]);
    revealUIElement(playDOM);
    toggleBetting();
  } else {
    modal.setModal('BANKRUPTED');
  }
  revealUIElement(modal.modalDOM);
  updateBank();
  hideUIElement(hitDOM);
  hideUIElement(standDOM);
};

const computerPlays = function computerPlays() {
  hands[0].cards.cards = cards.reveal(hands[0].cards); // Reveal computer cards
  revealUIElement(computerScoreWrapperDOM); // Display computer score
  cards.createUI(hands[0].cards, playerComputer); // Display updated cards
  let AIHelperResponse = [];
  while (AIHelper.gameIsInPlay === true) {
    AIHelper.currentScoreSetter(hands); // Give AIHelper up to date scores
    AIHelperResponse = AIHelper.isGameOver();
    if (AIHelperResponse[0]) { // Is the game over?
      break;
    }
    // If not, play a card
    deal(hands, 0, deck, 1, true);
    cards.createUI(hands[0].cards, playerComputer);
    renderScore(getScores(hands));
    // If the AIHelper returns a new hand the update the values
    if (AIHelperResponse[3]) {
      console.log('updating computer card values due to ace');
      hands = AIHelperResponse[3];
      renderScore(getScores(hands));
    }
  }
  calculateBank(AIHelperResponse);
};

playDOM.addEventListener('click', () => {
  toggleBetting();
  hideUIElement(modal.modalDOM);
  hideUIElement(playDOM);
  revealUIElement(hitDOM);
  revealUIElement(standDOM);
  controlsEnabled = true;
  AIHelper.resetGame();
  startGame();
});

hitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    hideUIElement(splitDOM); // If user had option to split and didn't take it, rehide
    deal(hands, 1, deck, 1, true);
    cards.createUI(hands[1].cards, playerHuman);
    const checkPlayerScoreData = checkScore(hands, 1); // Receive array with all score data
    controlsEnabled = checkPlayerScoreData[0];
    console.log(checkPlayerScoreData[1]);
    if (checkPlayerScoreData[2]) {
      hands = checkPlayerScoreData[2]; // Update hands array in case of aces scoring etc.
    }
    renderScore(getScores(hands)); // Update scores last in case of new hands data
    if (!checkPlayerScoreData[0]) { // Player must be bust, computer's turn
      computerPlays();
    }
  }
});

standDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    hideUIElement(splitDOM); // If user had option to split and didn't take it, rehide
    controlsEnabled = false; // Freeze controls
    // Play game
    computerPlays();
  }
});

splitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    hideUIElement(splitDOM); // Only getting the option to click once
    console.log('splitDOM');
    // Work out how to play multiple hands
  }
});

incrementDOM.addEventListener('click', () => {
  if (bettingEnabled) {
    if (currentBet + 5 <= bank) {
      currentBet += 5;
      updateCurrentBet();
    }
  }
});
decrementDOM.addEventListener('click', () => {
  if (bettingEnabled) {
    if (currentBet > 5) {
      currentBet -= 5;
      updateCurrentBet();
    }
  }
});

initNewGame();

// console.table(deck);
// console.table(hands);
// console.table(deck);
// console.table(hands);
// console.log(getScores(hands));

// TODO: - check to see when cards run out then reshuffle
//      - Split cards
//      - Double down
//      - Pretty graphics
//      - Identify natural blackjack
