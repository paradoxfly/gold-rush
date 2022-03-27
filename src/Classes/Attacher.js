import Participant from "./Participant";
import { Views } from "../utils/constants";

export default class Attacher extends Participant{

  async acceptWager(wagerAtomic){
    const wager = this.reach.formatCurrency(wagerAtomic, 4);
    this.utils.setWager(wager)
    this.utils.setView(Views.ACCEPT_TERMS)
    return await new Promise(resolve => {
      this.utils.setResolver({ resolve: () => {
        this.utils.setView(Views.ATTACHING)
        resolve();
      }})
    });
  }
}