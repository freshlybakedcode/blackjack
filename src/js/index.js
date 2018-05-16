import "../scss/main.scss";
import {cards} from './modules/cards';

let deck = [];

cards.createDeck(deck, true);   //Create new deck, cards face up
cards.shuffleDeck(deck);
console.table(deck);
cards.createUI(deck, table);