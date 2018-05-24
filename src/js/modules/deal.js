function deal(to, toIndex, from, quantity, faceUp) {
  for (let i = 0; i < quantity; i += 1) {
    if (from.length > 0) { // Are there still cards in the deck?
      const tempCard = [];
      tempCard.push(from.shift());
      tempCard[0].faceUp = faceUp;
      to[toIndex].cards.push(tempCard.shift());
    } else { // We need moar cards

    }
  }
}

export default deal;
