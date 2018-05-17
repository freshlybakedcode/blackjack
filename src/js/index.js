import '../scss/main.scss';
import cards from './modules/cards';
import deal from './modules/deal';
import { getScores, renderScore, checkScore } from './modules/scoring';
import playAI from './modules/playAI';
// DOM elements
const hitDOM = document.getElementById('hit');
const stickDOM = document.getElementById('stick');
const splitDOM = document.getElementById('split');
const computerScoreDOM = document.getElementById('computerScore');

let controlsEnabled = true;

const deck = [];
const hands = [
  {
    name: 'Computer',
    cards: [],
  },
  {
    name: 'Player',
    cards: [],
  },
];

hitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    deal(hands, 1, deck, 1, true);
    cards.createUI(hands[1].cards, playerHuman);
    renderScore(getScores(hands));
    controlsEnabled = checkScore(hands); // Will return false if bust
  }
});

stickDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    console.log('stickDOM');
    // Freeze controls
    controlsEnabled = false;
    // Reveal computer cards
    hands[0].cards.cards = cards.flip(hands[0].cards);
    // Display computer score and updated cards
    computerScoreDOM.classList.remove('hide');
    cards.createUI(hands[0].cards, playerComputer);
    // Play game
    playAI(hands);
    // Choose victor
  }
});

splitDOM.addEventListener('click', () => {
  if (controlsEnabled) {
    console.log('splitDOM');
    // Work out how to play multiple hands
  }
});

const initNewGame = function initNewGame() {
  computerScoreDOM.classList.add('hide');
  controlsEnabled = true;
  cards.createDeck(deck, true); // Create new deck, cards face up
  cards.shuffleDeck(deck);

  // deal() removes cards from the deck and adds them to a player array
  deal(hands, 0, deck, 2, false);
  deal(hands, 1, deck, 2, true);

  // display the dealt cards in DOM
  cards.createUI(hands[0].cards, playerComputer);
  cards.createUI(hands[1].cards, playerHuman);

  // Render the player score in DOM
  renderScore(getScores(hands));
};

initNewGame();

// console.table(deck);
// console.table(hands);
// console.table(deck);
// console.table(hands);
// console.log(getScores(hands));

