import { Views } from "../utils/constants";
import { updateScore } from "../redux/utils/scores";

export default class Participant{
  constructor(reach, setFunctions, dispatch){
    this.round = 0;
    this.opponentRound = 0;
    this.dispatch = dispatch
    this.reach = reach
    this.utils = setFunctions
  }

  random() { 
    return this.reach.hasRandom.random(); 
  }
  async getTime() { // Fun([], UInt)
    //logic for game
    //must set view to enable canvas
    this.utils.setView(Views.PLAY_TURN)
    this.utils.setPlay(true)
    const time = await new Promise((resolve) => {
      this.utils.setResolver({
        resolve: (t) => resolve(t)
      })
    })
    updateScore('you', this.round, time, this.dispatch)
    this.utils.setTime(time)
    this.utils.setView(Views.AWAITING_TURN)
    this.round++
    this.utils.setRound(this.round)
    return time;
  }

  opponentReplay(time){ //UInt (time it took opponent)
    //logic for opponent replay or view time it took opponent
    console.log('opponent time: ' + time)
    const timeDecimal = parseInt(time)
    updateScore('them', this.opponentRound, timeDecimal, this.dispatch)
    this.opponentRound++
    // this.utils.setView(Views.OPPONENT_REPLAY)
    // this.utils.setOpponentTime(time)
  }
  
  informTimeout() { 
    this.utils.setView(Views.TIMEOUT);
  }

  showWinner(winner){
    const outcome = winner.trim();
    this.utils.setWinner(outcome)
    this.utils.setView(Views.SHOW_WINNER)
  }
}