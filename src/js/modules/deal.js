export function deal(to, toIndex, from, quantity, faceUp) {
    for (let i=0; i < quantity; i++) {
        to[toIndex].cards.push(from.shift());
        to[toIndex].cards[to[toIndex].cards.length-1].faceUp = faceUp;
    }
}