function deal(to, toIndex, from, quantity, faceUp) {
  for (let i = 0; i < quantity; i += 1) {
    to[toIndex].cards.push(from.shift());
    to[toIndex].cards[to[toIndex].cards.length - 1].faceUp = faceUp;
  }
}

export default deal;
