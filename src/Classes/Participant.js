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
    const time = await new Promise((resolve) => {
      this.utils.setResolver({
        resolve: (t) => resolve(t)
      })
      this.utils.setGetTime(true)
    })
    updateScore('you', this.round, time, this.dispatch)
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
    const outcome = winner.charAt(0)
    console.log("winner: " + outcome)
    this.utils.setWinner(outcome)
    this.utils.setView(Views.SHOW_WINNER)
  }

  informNewRound(){
    this.utils.setView(Views.PLAY_TURN)
    this.utils.setPlay(true)
  }
}