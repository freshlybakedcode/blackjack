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
  isGameOver: function isGameOver() {
    // return isGameOver, message
    if (this.playerScore > 21) {
      this.gameIsInPlay = false;
      return [true, 'Player bust: computer wins!'];
    } else if (this.computerScoreRightNow > 21) {
      this.gameIsInPlay = false;
      return [true, 'computer bust'];
    } else if (this.computerScoreRightNow > this.playerScore && this.computerScoreRightNow <= 21) { // computer wins
      this.gameIsInPlay = false;
      return [true, 'computer wins'];
    }
    return false;
  },
};

export default AIHelper;
