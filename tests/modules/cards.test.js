import assert from 'assert';
import {cards} from '../../src/js/modules/cards';

let deck = [];
let shuffledDeck = [];
cards.createDeck(shuffledDeck, true);

describe('cards.js tests', function() {
    describe('`cards` object', function() {
        it('should exist', function() {
            assert.notStrictEqual(cards, undefined);
        });
        
        describe('createDeck() function', function() {
            it('should exist', function() {
                assert.notStrictEqual(cards.createDeck, undefined);
            });
            it('should create an array', function() {
                assert.strictEqual(cards.createDeck(deck, true), deck.isArray);
            });
            it('the array should contain 52 entries', function() {
                assert.strictEqual(deck.length, 52);
            });
            it('each of the 52 array entries should contain 4 pieces of data', function() {
                assert.notStrictEqual(deck.forEach(element => {
                    element.face;
                    element.suit;
                    element.value;
                    element.faceUp;
                }), "" | undefined);
            });
        });

        describe('shuffleDeck() function', function() {
            it('should exist', function() {
                assert.notStrictEqual(cards.shuffleDeck, undefined);
            });
            it('should change the order of the cards', function() {
                assert.notStrictEqual(cards.shuffleDeck(shuffledDeck), deck);
            });
        });

        describe('createUI() function', function() {
            it('should exist', function() {
                assert.notStrictEqual(cards.createUI, undefined);
            });
        });

    });
});  