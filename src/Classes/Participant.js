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
    this.utils.setView(Views.AWAITING_TURN)
    return time;
  }

  async opponentReplay(id){
    //logic for opponent replay or view time it took opponent
  }
  
  informTimeout() { 
    this.utils.setView(Views.TIMEOUT);
  }
}