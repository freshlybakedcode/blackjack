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

export function renderScore(value) { // Outputs the player score to screen
  playerScoreDOM.innerHTML = value;
}

export function checkScore(hands) { // Assesses the player's score for bust/winning/splitting etc
  const value = getScores(hands);
  console.log(value);
  if (value[1] > 21 && !handContainsAce(hands[1])) { // If over 21 but there are no aces then bust
    console.log('bust');
  }
  if (value[1] > 21 && handContainsAce(hands[1])) { // If over 21 but there is an ace so it'll count as 1 not 11
    console.log('Need to do more maths here');
  }
  if (hands[1].cards.length === 2 && hands[1].cards[0].face === hands[1].cards[1].face) {
    console.log('Can split');
  }
}
