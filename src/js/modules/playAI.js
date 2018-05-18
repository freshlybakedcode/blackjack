import { getScores, renderScore, checkScore } from './scoring';

const playAI = function playAI(hands) {
  
  const playerScore = getScores(hands)[1];

  const computerHasWon = function computerHasWon() {
    if (playerScore < getScores(hands)[0]) {
      return true;
    }
  };

  console.log(`the computer's gonna attempt to win`);
  console.table(hands);

  console.log('the player has ' + playerScore);
  console.log('the computer has ' + getScores(hands)[0]);

  // Has the computer already won?
  if (computerHasWon()) {
    return 'computer wins';
  }

  // If not, play a card
  

};

export default playAI;
