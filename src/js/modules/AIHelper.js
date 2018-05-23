import { handContainsAce, getScores } from './scoring';

const AIHelper = {
  gameIsInPlay: true,
  playerScore: 0,
  computerScoreRightNow: 0,
  hands: [],
  currentScoreSetter: function currentScoreSetter(hands) {
    this.hands = hands;
    const scores = getScores(this.hands);
    this.computerScoreRightNow = scores[0];
    this.playerScore = scores[1];
    console.log(`Set computerScoreRightNow to ${this.computerScoreRightNow} and playerScore to ${this.playerScore}`);
  },
  resetGame: function resetGame() {
    this.gameIsInPlay = true;
  },
  isGameOver: function isGameOver() {
    // return isGameOver, message
    if (this.playerScore > 21) {
      this.gameIsInPlay = false;
      return [true, 'bust', 'Player bust: computer wins!'];
    } else if (this.computerScoreRightNow > 21 && !handContainsAce(this.hands[0])) {
      this.gameIsInPlay = false;
      return [true, 'win', 'computer bust'];
    } else if (this.computerScoreRightNow > 21 && handContainsAce(this.hands[0])) { // Adjust scoring for ace
      this.hands[0].cards.forEach((card) => {
        if (card.faceValue === 11) {
          card.faceValue = 1;
        }
      });
      return [false, 'Should have updated computer score - ace now equals 1', this.hands];
    } else if (this.computerScoreRightNow > this.playerScore && this.computerScoreRightNow <= 21) { // computer wins
      this.gameIsInPlay = false;
      return [true, 'lose', 'computer wins'];
    } else if (this.computerScoreRightNow > 18 && this.computerScoreRightNow === this.playerScore) {
      this.gameIsInPlay = false;
      return [true, draw, 'Both scores the same; push!'];
    }
    return false;
  },
};

export default AIHelper;
