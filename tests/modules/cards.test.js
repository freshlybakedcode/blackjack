import assert from 'assert';
import cards from '../../src/js/modules/cards';

const deck = [];
const shuffledDeck = [];
cards.createDeck(shuffledDeck, true);

describe('cards.js tests', () => {
  describe('`cards` object', () => {
    it('should exist', () => {
      assert.notStrictEqual(cards, undefined);
    });

    describe('createDeck() function', () => {
      it('should exist', () => {
        assert.notStrictEqual(cards.createDeck, undefined);
      });
      it('should create an array', () => {
        assert.strictEqual(cards.createDeck(deck, true), deck.isArray);
      });
      it('the array should contain 52 entries', () => {
        assert.strictEqual(deck.length, 52);
      });
      it('each of the 52 array entries should contain 4 pieces of data', () => {
        deck.forEach((element) => {
          assert.notStrictEqual(element.face, '' || undefined);
          assert.notStrictEqual(element.suit, '' || undefined);
          assert.notStrictEqual(element.value, '' || undefined);
          assert.notStrictEqual(element.faceUp, '' || undefined);
        });
      });
    });

    describe('shuffleDeck() function', () => {
      it('should exist', () => {
        assert.notStrictEqual(cards.shuffleDeck, undefined);
      });
      it('should change the order of the cards', () => {
        assert.notStrictEqual(cards.shuffleDeck(shuffledDeck), deck);
      });
    });

    describe('createUI() function', () => {
      it('should exist', () => {
        assert.notStrictEqual(cards.createUI, undefined);
      });
    });
  });
});
