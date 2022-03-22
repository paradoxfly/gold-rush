import Participant from "./Participant";
import { Views } from "../utils/constants";

export default class Deployer extends Participant {

  setWagerAndDeadline(wager, deadline) { 
    this.wager = wager;
    this.deadline = deadline 
  }

  informAcceptedWager(){
    this.utils.setView(Views.ATTACH_SUCCESS)
    setTimeout(() => {
      this.utils.setView(Views.AWAITING_TURN)
    }, 3000);
  }
}