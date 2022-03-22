import { Views } from "../utils/constants";
import game from "../utils/game";

export default class Participant{
  constructor(reach, setFunctions, stages, dispatch){
    this.round = 0;
    this.stages = stages
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
    const time = await game(this.dispatch, this.stages[this.round], this.stages[this.round].options)
    this.utils.setTime(time)
    this.utils.setView(Views.AWAITING_TURN)
    this.round++
    return time;
  }

  async opponentReplay(time){ //UInt (time it took opponent)
    //logic for opponent replay or view time it took opponent
    this.utils.setView(Views.OPPONENT_REPLAY)
    this.utils.setOpponentTime(time)
  }
  
  informTimeout() { 
    this.utils.setView(Views.TIMEOUT);
  }
}