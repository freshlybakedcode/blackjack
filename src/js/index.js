import '../scss/main.scss';
import cards from './modules/cards';
import deal from './modules/deal';
import { getScores, checkScore, checkSplit } from './modules/scoring';
import AIHelper from './modules/AIHelper';

// DOM elements
const hitDOM = document.getElementById('hit');
const stickDOM = document.getElementById('stick');
const splitDOM = document.getElementById('split');
const computerScoreDOM = document.getElementById('computerScore');
const playerScoreDOM = document.getElementById('playerScore');

let controlsEnabled = true;
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

const initNewGame = function initNewGame() {
  computerScoreDOM.classList.add('hide');
  controlsEnabled = true;
  cards.createDeck(deck, true); // Create new deck, cards face up
  cards.shuffleDeck(deck);

  // deal() removes cards from the deck and adds them to a player array
  deal(hands, 0, deck, 1, false);
  deal(hands, 0, deck, 1, true);
  deal(hands, 1, deck, 2, true);

  // display the dealt cards in DOM
  cards.createUI(hands[0].cards, playerComputer);
  cards.createUI(hands[1].cards, playerHuman);

  // Render the player score in DOM
  renderScore(getScores(hands));

  // Check for split
  if (checkSplit(hands, 1)) {
    splitDOM.classList.remove('hide'); // Display option to split
  }
};

const finishGame = function finishGame(AIResponse) {
  // AIResponse is returned from playAI()
  console.log(AIResponse);
};

const computerPlays = function computerPlays() {
  hands[0].cards.cards = cards.reveal(hands[0].cards); // Reveal computer cards
  computerScoreDOM.classList.remove('hide'); // Display computer score
  cards.createUI(hands[0].cards, playerComputer); // Display updated cards
  let AIHelperResponse = [];
  while (AIHelper.gameIsInPlay === true) {
    AIHelper.currentScoreSetter(hands); // Give AIHelper up to date scores
    AIHelperResponse = AIHelper.isGameOver();
    if (AIHelperResponse[0]) { // Is the game over?
      console.log(AIHelper.isGameOver());
      break;
    }
    // If not, play a card
    deal(hands, 0, deck, 1, true);
    cards.createUI(hands[0].cards, playerComputer);
    renderScore(getScores(hands));
    // If the AIHelper returns a new hand the update the values
    if (AIHelperResponse[2]) {
      console.log('updating computer card values due to ace');
      hands = AIHelperResponse[2];
      renderScore(getScores(hands));
    }
  }
  finishGame(AIHelperResponse[1]);
};

hitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    if (!splitDOM.classList.contains('hide')) {
      splitDOM.classList.add('hide'); // If user had option to split and didn't take it, rehide
    }
    deal(hands, 1, deck, 1, true);
    cards.createUI(hands[1].cards, playerHuman);
    const checkPlayerScoreData = checkScore(hands, 1); // Receive array with all score data
    controlsEnabled = checkPlayerScoreData[0];
    console.log(checkPlayerScoreData[1]);
    hands = checkPlayerScoreData[2]; // Update hands array in case of aces scoring etc.
    renderScore(getScores(hands)); // Update scores last in case of new hands data
    if (!checkPlayerScoreData[0]) { // Player must be bust, computer's turn
      computerPlays();
    }
  }
});

stickDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    controlsEnabled = false; // Freeze controls
    // Play game
    computerPlays();
  }
});

splitDOM.addEventListener('click', () => {
  splitDOM.classList.add('hide'); // Only getting the option to click once
  console.log('splitDOM');
  // Work out how to play multiple hands
});

initNewGame();

// console.table(deck);
// console.table(hands);
// console.table(deck);
// console.table(hands);
// console.log(getScores(hands));

