import '../scss/main.scss';
import cards from './modules/cards';
import deal from './modules/deal';
import { getScores, renderScore, checkScore } from './modules/scoring';

// We're gonna hook up some stuff to the buttons in the DOM
const hitDOM = document.getElementById('hit');
const stickDOM = document.getElementById('stick');
const splitDOM = document.getElementById('split');

const deck = [];
const hands = [
  {
    name: 'Computer',
    cards: [],
    score: 0,
  },
  {
    name: 'Player',
    cards: [],
    score: 0,
  },
];

hitDOM.addEventListener('click', () => {
  deal(hands, 1, deck, 1, true);
  cards.createUI(hands[1].cards, playerHuman);
  renderScore(getScores(hands)[1]);
  checkScore(hands);
});

stickDOM.addEventListener('click', () => {
  console.log('stickDOM');
});

splitDOM.addEventListener('click', () => {
  console.log('splitDOM');
});

const initNewGame = function initNewGame() {
  cards.createDeck(deck, true); // Create new deck, cards face up
  cards.shuffleDeck(deck);

  // deal() removes cards from the deck and adds them to a player array
  deal(hands, 0, deck, 2, false);
  deal(hands, 1, deck, 2, true);

  // display the dealt cards in DOM
  cards.createUI(hands[0].cards, playerComputer);
  cards.createUI(hands[1].cards, playerHuman);

  // Render the player score in DOM
  renderScore(getScores(hands)[1]);
};

initNewGame();

// console.table(deck);

// Modal window to choose number of players
// Hands is an array containing each an array for each player which in turn contains all the cards that player holds
// console.table(hands);
// console.table(deck);
// console.table(hands);
// console.log(getScores(hands));
// checkScore(hands);

