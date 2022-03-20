import Participant from "./Participant";
import { Views } from "../utils/constants";

export default class Deployer extends Participant {

  setWagerAndDeadline(wager, deadline) { 
    this.wager = wager;
    this.deadline = deadline 
  }

  // async deploy() {
  //   const ctc = this.props.acc.contract(backend);
  //   this.setState({view: 'Deploying', ctc});
  //   this.wager = reach.parseCurrency(this.state.wager); // UInt
  //   this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
  //   backend.Alice(ctc, this);
  //   const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  //   this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  // }
}