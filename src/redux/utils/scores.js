import { updateScoreBoard } from "../actions/score.action";

/**
 * 
 * @param {String} who Can only be 'you' or 'them'
 * @param {Number} round 
 * @param {Number} score 
 * @param {Object} dispatch
 * @returns null
 */
export function updateScore(who, round, score, dispatch){
  const roundString = 'round' + round;
  dispatch( updateScoreBoard(who, roundString, score) );
}