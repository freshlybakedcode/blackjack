const AIHelper = {
  gameIsInPlay: true,
  playerScore: 0,
  computerScoreRightNow: 0,
  currentScoreSetter: function currentScoreSetter(score) {
    this.computerScoreRightNow = score[0];
    this.playerScore = score[1];
    console.log(`received ${score} and set computerScoreRightNow to ${this.computerScoreRightNow} and playerScore to ${this.playerScore}`);
  },
  computerHasWon: function computerHasWon() {
    if (this.playerScore > 21) {
      this.gameIsInPlay = false;
      return 'Player bust: computer wins!';
    } else if (this.computerScoreRightNow > 21) {
      this.gameIsInPlay = false;
      return 'computer bust';
    } else if (this.computerScoreRightNow > this.playerScore && this.computerScoreRightNow <= 21) { // computer wins
      this.gameIsInPlay = false;
      return 'computer wins';
    }
    return false;
  },
};

export default AIHelper;
