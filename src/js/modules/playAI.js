import { getScores, renderScore, checkScore } from './scoring';

const playAI = function playAI(hands) {
  
  const playerScore = getScores(hands)[1];
  
  console.log(`the computer's gonna attempt to win`);
  console.table(hands);

  console.log('the player has ' + playerScore);
  console.log('the computer has ' + getScores(hands)[0]);

};

export default playAI;
