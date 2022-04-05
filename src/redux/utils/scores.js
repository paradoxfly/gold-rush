import { updateScoreBoard } from "../actions/score.action";
import { setScore } from "../slices/scores.slice"

/**
 * 
 * @param {String} who Can only be 'you' or 'them'
 * @param {Number} round 
 * @param {Number} score 
 * @param {Object} dispatch
 * @returns null
 */
export function updateScore(who, round, score, dispatch){
  const { payload } = updateScoreBoard(who, round, score) 
  dispatch( setScore( payload ) );
}