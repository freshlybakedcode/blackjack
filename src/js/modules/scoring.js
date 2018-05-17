const playerScoreDOM = document.getElementById('playerScore');

export function getScores(hands) {
  const scores = [];
  hands.forEach((hand) => {
    let score = 0;
    hand.cards.forEach((card) => {
      score += card.value;
    });
    scores.push(score);
  });
  return scores;
}

export function updateScore(value) {
  playerScoreDOM.innerHTML = value;
}
