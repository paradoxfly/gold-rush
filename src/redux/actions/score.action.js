export function updateScoreBoard( who, round, score ){
  return({
    type: 'scores/setScore',
    payload: {
      who, round, score
    }
  }) 
}