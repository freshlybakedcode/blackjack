function deal(to, toIndex, from, quantity, faceUp) {
  for (let i = 0; i < quantity; i += 1) {
    const tempCard = [];
    tempCard.push(from.shift());
    tempCard[0].faceUp = faceUp;
    to[toIndex].cards.push(tempCard.shift());
  }
}

export default deal;
