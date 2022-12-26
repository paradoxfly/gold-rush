import { Views } from "../utils/constants";

export default class Participant{
  constructor(reach, setFunctions, dispatch){
    this.round = -1;
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
    this.dispatch.updateScore('you', this.round, time)
    return time;
  }

  opponentReplay(time){ //UInt (time it took opponent)
    //logic for opponent replay or view time it took opponent
    console.log('opponent time: ' + time)
    const timeDecimal = parseInt(time)
    this.dispatch.updateScore('them', this.opponentRound, timeDecimal)
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
    this.round++
    this.utils.setRound(this.round)
    this.utils.setView(Views.PLAY_TURN)
    this.utils.setPlay(true)
  }
}