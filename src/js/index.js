import '../scss/main.scss';
import cards from './modules/cards';
import deal from './modules/deal';
import { getScores, renderScore, checkScore } from './modules/scoring';
import AIHelper from './modules/AIHelper';

// DOM elements
const hitDOM = document.getElementById('hit');
const stickDOM = document.getElementById('stick');
const splitDOM = document.getElementById('split');
const computerScoreDOM = document.getElementById('computerScore');

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
};

const finishGame = function finishGame(AIResponse) {
  // AIResponse is returned from playAI()
  console.log(AIResponse);
};

const computerPlays = function computerPlays() {
  let finishMessage = '';
  while (AIHelper.gameIsInPlay !== false) {
    AIHelper.currentScoreSetter(getScores(hands));
    // Has the computer already won?
    if (AIHelper.computerHasWon()) {
      finishMessage = AIHelper.computerHasWon();
      break;
    }
    // If not, play a card
    deal(hands, 0, deck, 1, true);
    cards.createUI(hands[0].cards, playerComputer);
    renderScore(getScores(hands));
  }
  finishGame(finishMessage);
};

hitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    deal(hands, 1, deck, 1, true);
    cards.createUI(hands[1].cards, playerHuman);
    const checkPlayerScoreData = checkScore(hands, 1);
    controlsEnabled = checkPlayerScoreData[0];
    console.log(checkPlayerScoreData[1]);
    hands = checkPlayerScoreData[2]; // Update hands array in case of aces scoring etc.
    renderScore(getScores(hands)); // Update scores last in case of new hands data
  }
});

stickDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    console.log('stickDOM');
    // Freeze controls
    controlsEnabled = false;
    // Reveal computer cards
    hands[0].cards.cards = cards.reveal(hands[0].cards);
    // Display computer score and updated cards
    computerScoreDOM.classList.remove('hide');
    cards.createUI(hands[0].cards, playerComputer);
    // Play game
    computerPlays();
  }
});

splitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    console.log('splitDOM');
    // Work out how to play multiple hands
  }
});

initNewGame();

// console.table(deck);
// console.table(hands);
// console.table(deck);
// console.table(hands);
// console.log(getScores(hands));

