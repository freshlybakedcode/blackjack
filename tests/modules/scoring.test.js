import assert from 'assert';
import {
  handContainsAce,
  getScores,
  checkScore,
  checkSplit
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
        face: '6', suit: 'diamonds', value: 6, faceValue: 6, faceUp: true,
      },
      {
        face: '5', suit: 'spades', value: 5, faceValue: 5, faceUp: true,
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
});
