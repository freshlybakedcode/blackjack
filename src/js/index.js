import "../scss/main.scss";
import {cards} from './modules/cards';

let deck = [];

cards.createDeck(deck, true);   //Create new deck, cards face up
cards.shuffleDeck(deck);
cards.createUI(deck, table);
console.table(deck);