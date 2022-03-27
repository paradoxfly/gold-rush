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
    updateScore('you', this.round + 1, time, this.dispatch)
    this.utils.setTime(time)
    this.utils.setView(Views.AWAITING_TURN)
    this.round++
    this.utils.setRound(this.round)
    return time;
  }

  async opponentReplay(time){ //UInt (time it took opponent)
    //logic for opponent replay or view time it took opponent
    const opponentTime = this.reach.formatCurrency(time, 4);
    updateScore('them', this.opponentRound + 1, opponentTime, this.dispatch)
    this.utils.setView(Views.OPPONENT_REPLAY)
    this.utils.setOpponentTime(time)
  }
  
  informTimeout() { 
    this.utils.setView(Views.TIMEOUT);
  }
}