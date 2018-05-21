const computerScoreDOM = document.getElementById('computerScore');
const playerScoreDOM = document.getElementById('playerScore');

const handContainsAce = function handContainsAce(hand) {
  let hasAce = false;
  hand.cards.forEach((card) => {
    card.face === 'A' ? hasAce = true : hasAce = hasAce;
  });
  return hasAce;
};

export function getScores(hands) { // Returns an array with both the computer and player scores
  const scores = [];
  hands.forEach((hand) => {
    let score = 0;
    hand.cards.forEach((card) => {
      score += card.faceValue;
    });
    scores.push(score);
  });
  return scores;
}

export function renderScore(values) { // Outputs the scores to screen
  computerScoreDOM.innerHTML = values[0];
  playerScoreDOM.innerHTML = values[1];
}

export function checkScore(hands, index) { // Assesses the player's score for bust/winning/splitting etc
  const value = getScores(hands);
  console.log(value);
  // return controlsEnabled, message, hands in play
  if (value[index] > 21 && !handContainsAce(hands[index])) { // If over 21 but there are no aces then bust
    // console.log('bust');
    return [false, 'bust', hands];
  }
  if (value[index] > 21 && handContainsAce(hands[index])) { // If over 21 but there is an ace so it'll count as 1 not 11
    hands[1].cards.forEach((card) => {
      if (card.faceValue === 11) {
        card.faceValue = 1;
      }
    });
    return [true, 'Counting ace as 1 not 11', hands];
  }
  if (hands[index].cards.length === 2 && hands[index].cards[0].face === hands[index].cards[1].face) {
    return [true, 'Can split', hands];
  }
  return [true, 'Player still in play', hands];
}
