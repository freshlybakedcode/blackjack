import assert from 'assert';
import {
  handContainsAce,
  getScores,
  checkSplit,
  checkScore,
} from '../../src/js/modules/scoring';

const hands = [
  {
    name: 'This hand has an ace',
    cards: [
      {
        face: 'A', suit: 'diamonds', value: 1, faceValue: 11, faceUp: true,
      },
      {
        face: '5', suit: 'spades', value: 5, faceValue: 5, faceUp: true,
      },
    ],
  },
  {
    name: 'This hand does not',
    cards: [
      {
        face: '5', suit: 'diamonds', value: 5, faceValue: 5, faceUp: true,
      },
      {
        face: '5', suit: 'spades', value: 5, faceValue: 5, faceUp: true,
      },
    ],
  },
];

const bustHand = [
  {
    name: 'exceeding 21',
    cards: [
      {
        face: 'K', suit: 'diamonds', value: 10, faceValue: 10, faceUp: true,
      },
      {
        face: 'Q', suit: 'spades', value: 10, faceValue: 10, faceUp: true,
      },
      {
        face: 'J', suit: 'spades', value: 10, faceValue: 10, faceUp: true,
      },
    ],
  },
];

describe('scoring.js tests', () => {
  describe('handContainsAce() function', () => {
    it('should exist', () => {
      assert.notStrictEqual(handContainsAce(hands[0]), undefined);
    });
    it('should return true when the hand has an ace', () => {
      assert.strictEqual(handContainsAce(hands[0]), true);
    });
    it('should return false when the hand does not have an ace', () => {
      assert.strictEqual(handContainsAce(hands[1]), false);
    });
  });
  describe('getScores() function', () => {
    it('should exist', () => {
      assert.notStrictEqual(getScores(hands), undefined);
    });
    it('should return an array with two elements', () => {
      assert.strictEqual(Array.isArray(getScores(hands)), true);
      assert.strictEqual(getScores(hands).length, 2);
    });
    it('should return 16 and 11 in the array with the existing test data', () => {
      assert.strictEqual(getScores(hands)[0], 16);
      assert.strictEqual(getScores(hands)[1], 10);
    });
  });
  describe('checkSplit() function', () => {
    it('should exist', () => {
      assert.notStrictEqual(checkSplit(hands, 0), undefined);
    });
    it('should be able to determine if a hand can be split (ie: two matching face values', () => {
      assert.strictEqual(checkSplit(hands, 0), false);
      assert.strictEqual(checkSplit(hands, 1), true);
    });
  });
  describe('checkScore() function', () => {
    it('should exist', () => {
      assert.notStrictEqual(checkScore(hands), undefined);
    });
    it('should report bust when hand value exceeds 21', () => {
      assert.strictEqual(checkScore(bustHand, 0)[1], 'bust');
    });
  });
});
