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
    } else if (this.computerScoreRightNow > 21 && !handContainsAce(this.hands[0])) {
      this.gameIsInPlay = false;
      return [true, 'computer bust'];
    } else if (this.computerScoreRightNow > 21 && handContainsAce(this.hands[0])) {
      return [true, 'This shouldn\'t be true, the ace the computer is holding could count as 1'];
    } else if (this.computerScoreRightNow > this.playerScore && this.computerScoreRightNow <= 21) { // computer wins
      this.gameIsInPlay = false;
      return [true, 'computer wins'];
    } else if (this.computerScoreRightNow > 18 && this.computerScoreRightNow === this.playerScore) {
      this.gameIsInPlay = false;
      return [true, 'Both scores the same; push!'];
    }
    return false;
  },
};

export default AIHelper;
