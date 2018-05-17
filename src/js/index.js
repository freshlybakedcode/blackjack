import '../scss/main.scss';
import cards from './modules/cards';
import deal from './modules/deal';
import { getScores, updateScore } from './modules/scoring';

// We're gonna hook up some stuff to the buttons in the DOM
const hitDOM = document.getElementById('hit');
const stickDOM = document.getElementById('stick');
const splitDOM = document.getElementById('split');

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
  deal(hands, 1, deck, 1, true);
  cards.createUI(hands[1].cards, playerHuman);
  updateScore(getScores(hands)[1]);
});

stickDOM.addEventListener('click', () => {
  console.log('stickDOM');
});

splitDOM.addEventListener('click', () => {
  console.log('splitDOM');
});

cards.createDeck(deck, true); // Create new deck, cards face up
cards.shuffleDeck(deck);

console.table(deck);

// Modal window to choose number of players
// Hands is an array containing each an array for each player which in turn contains all the cards that player holds
console.table(hands);

// deal() removes cards from the deck and adds them to a player array
deal(hands, 0, deck, 2, false);
deal(hands, 1, deck, 2, true);

console.table(deck);
console.table(hands);
console.log(getScores(hands));
updateScore(getScores(hands)[1]);

cards.createUI(hands[0].cards, playerComputer);
cards.createUI(hands[1].cards, playerHuman);
