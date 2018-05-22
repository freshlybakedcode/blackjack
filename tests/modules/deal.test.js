import assert from 'assert';
import deal from '../../src/js/modules/deal';

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
const deck = [
  {
    face: 'A',
    suit: 'clubs',
    value: 1,
    faceValue: 11,
    faceUp: true,
  },
  {
    face: '2',
    suit: 'clubs',
    value: 2,
    faceValue: 2,
    faceUp: true,
  },
  {
    face: '3',
    suit: 'clubs',
    value: 3,
    faceValue: 3,
    faceUp: true,
  },
  {
    face: '4',
    suit: 'clubs',
    value: 4,
    faceValue: 4,
    faceUp: true,
  },
  {
    face: '5',
    suit: 'clubs',
    value: 5,
    faceValue: 5,
    faceUp: true,
  },
  {
    face: '6',
    suit: 'clubs',
    value: 6,
    faceValue: 6,
    faceUp: true,
  },
  {
    face: '7',
    suit: 'clubs',
    value: 7,
    faceValue: 7,
    faceUp: true,
  },
  {
    face: '8',
    suit: 'clubs',
    value: 8,
    faceValue: 8,
    faceUp: true,
  },
  {
    face: '9',
    suit: 'clubs',
    value: 9,
    faceValue: 9,
    faceUp: true,
  },
  {
    face: '10',
    suit: 'clubs',
    value: 10,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'J',
    suit: 'clubs',
    value: 11,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'Q',
    suit: 'clubs',
    value: 12,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'K',
    suit: 'clubs',
    value: 13,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'A',
    suit: 'diamonds',
    value: 1,
    faceValue: 11,
    faceUp: true,
  },
  {
    face: '2',
    suit: 'diamonds',
    value: 2,
    faceValue: 2,
    faceUp: true,
  },
  {
    face: '3',
    suit: 'diamonds',
    value: 3,
    faceValue: 3,
    faceUp: true,
  },
  {
    face: '4',
    suit: 'diamonds',
    value: 4,
    faceValue: 4,
    faceUp: true,
  },
  {
    face: '5',
    suit: 'diamonds',
    value: 5,
    faceValue: 5,
    faceUp: true,
  },
  {
    face: '6',
    suit: 'diamonds',
    value: 6,
    faceValue: 6,
    faceUp: true,
  },
  {
    face: '7',
    suit: 'diamonds',
    value: 7,
    faceValue: 7,
    faceUp: true,
  },
  {
    face: '8',
    suit: 'diamonds',
    value: 8,
    faceValue: 8,
    faceUp: true,
  },
  {
    face: '9',
    suit: 'diamonds',
    value: 9,
    faceValue: 9,
    faceUp: true,
  },
  {
    face: '10',
    suit: 'diamonds',
    value: 10,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'J',
    suit: 'diamonds',
    value: 11,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'Q',
    suit: 'diamonds',
    value: 12,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'K',
    suit: 'diamonds',
    value: 13,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'A',
    suit: 'hearts',
    value: 1,
    faceValue: 11,
    faceUp: true,
  },
  {
    face: '2',
    suit: 'hearts',
    value: 2,
    faceValue: 2,
    faceUp: true,
  },
  {
    face: '3',
    suit: 'hearts',
    value: 3,
    faceValue: 3,
    faceUp: true,
  },
  {
    face: '4',
    suit: 'hearts',
    value: 4,
    faceValue: 4,
    faceUp: true,
  },
  {
    face: '5',
    suit: 'hearts',
    value: 5,
    faceValue: 5,
    faceUp: true,
  },
  {
    face: '6',
    suit: 'hearts',
    value: 6,
    faceValue: 6,
    faceUp: true,
  },
  {
    face: '7',
    suit: 'hearts',
    value: 7,
    faceValue: 7,
    faceUp: true,
  },
  {
    face: '8',
    suit: 'hearts',
    value: 8,
    faceValue: 8,
    faceUp: true,
  },
  {
    face: '9',
    suit: 'hearts',
    value: 9,
    faceValue: 9,
    faceUp: true,
  },
  {
    face: '10',
    suit: 'hearts',
    value: 10,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'J',
    suit: 'hearts',
    value: 11,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'Q',
    suit: 'hearts',
    value: 12,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'K',
    suit: 'hearts',
    value: 13,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'A',
    suit: 'spades',
    value: 1,
    faceValue: 11,
    faceUp: true,
  },
  {
    face: '2',
    suit: 'spades',
    value: 2,
    faceValue: 2,
    faceUp: true,
  },
  {
    face: '3',
    suit: 'spades',
    value: 3,
    faceValue: 3,
    faceUp: true,
  },
  {
    face: '4',
    suit: 'spades',
    value: 4,
    faceValue: 4,
    faceUp: true,
  },
  {
    face: '5',
    suit: 'spades',
    value: 5,
    faceValue: 5,
    faceUp: true,
  },
  {
    face: '6',
    suit: 'spades',
    value: 6,
    faceValue: 6,
    faceUp: true,
  },
  {
    face: '7',
    suit: 'spades',
    value: 7,
    faceValue: 7,
    faceUp: true,
  },
  {
    face: '8',
    suit: 'spades',
    value: 8,
    faceValue: 8,
    faceUp: true,
  },
  {
    face: '9',
    suit: 'spades',
    value: 9,
    faceValue: 9,
    faceUp: true,
  },
  {
    face: '10',
    suit: 'spades',
    value: 10,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'J',
    suit: 'spades',
    value: 11,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'Q',
    suit: 'spades',
    value: 12,
    faceValue: 10,
    faceUp: true,
  },
  {
    face: 'K',
    suit: 'spades',
    value: 13,
    faceValue: 10,
    faceUp: true,
  },
];

describe('deal.js tests', () => {
  it('should exist', () => {
    assert.notStrictEqual(deal, undefined);
  });
  it('should move cards from the deck to the hand', () => {
    deal(hands, 0, deck, 1, false);
    deal(hands, 0, deck, 1, true);
    deal(hands, 1, deck, 3, true);
    assert.strictEqual(hands[0].cards.length, 2);
    assert.strictEqual(hands[1].cards.length, 3);
    assert.strictEqual(deck.length, 52 - 5);
  });
  it('should be able to set the faceUp property programatically', () => {
    assert.strictEqual(hands[0].cards[0].faceUp, false);
    assert.strictEqual(hands[0].cards[1].faceUp, true);
  });
});
