# Workshop: Gold Rush

In this workshop, we'll go through me and Praise's Bounty Hack submission, the Gold Rush game; where two players have to try to rush to finish the game's stages in less time than their opponent. There are three stages in total. The program stores the time it takes them in each stage, and at the end, computes each of their total times. The player with the least total time wins the game.

This workshop assumes that you've completed the tutorial.

We assume that you’ll go through this workshop in a directory named ~/reach/workshop-gold-rush:

```$ mkdir -p ~/reach/workshop-gold-rush```

And that you have a copy of Reach installed in ~/reach so you can write

```$ ../reach version```

You should start by initializing your project

```$ ../reach init```

## Problem Analysis
The first step to designing any program is to perform problem analysis and determine what we have to do to successfully solve the problem.

You should answer some questions concerning the design of the application to go thriugh the same process we did while writing this project.

You should also write your own answers in your Reach program using comments. /* Remeber comments are written like this. */

```
Who is involved in this application?

What information do they know at the start of the program?

What information are they going to discover and use in the program?

What funds change ownership during the application and how?
```

**Stop!** Write down the problem analysis of this program as a comment. Here's our answer to those questions:
```
Our application involves 2 roles: One deployer and one attacher.

Deployer knows about the price of the wager they want to set for the game, and the deadline for deployer to connect.

Attacher will be informed about the price of the wager set by the deployer.

Both attacher and deployer pay wager to the contract. At the end of the game, the winner gets paid all the wagers, or in the case of a draw, both players get refunded.
```
Its completely okay if your answer differs from ours. If you're confident that your answers are correct you can continue with them through this workshop.

## Data Definition
For the next step, we are going to define the data type equivalents of the values used in our answers from the previous section. Also, in this step we'll be deciding what functions our participants will have.

* What functions/values does Deployer need to deploy the game, play and observe outcomes?

* What functions/values does attacher need to attach, play and observe outcomes?

* What functions do both participants have in common?

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (index.rsh) as the participant interact interface for each of the participants.

**Stop!** Write down the data definitions for this.

It's time to see our answers!

First we'll define a player object that contains the functions both participants have in common.

```
const Player = {
  getTime: Fun([], UInt),
  opponentReplay: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  showWinner: Fun([Bytes(16)], Null),
  informNewRound: Fun([], Null),
}
```
Then we'll define each individual participant's unique function, but also pass the generic ones to both.
```
const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
```

We're going to represent the cost of a wager with UInt (Unsigned Integer). Deployer will set this value after deploying the contract. We'll also represent the duration of a deadline with UInt.

Attacher has a function which lets them view and accept the wager set by the deployer. They'll have the option of refusing it and thus terminating the contract.

For the actual gameplay, both participants have 5 functions.
* `getTime` for playing a move(publishing how much time a stage took them),
* `opponentReplay` for viewing how much time it took the opponent to finish a stage,
* `informTimeout` for letting them know when there is a timeout,
* `showWinner` for telling them the overall winner of all three stages,
* `informNewRound` to let them know when its the start of a new round (stage).

## Communication Construction
Now we can design the structure and flow of communication of our application. Try to write this part considering how the deployer setting and paying the wager, attacher accepting and paying the wager, and both of them taking turns to play would go.

**Stop!** Write down the communication pattern for this program as comments.

Here's what we wrote
```
1. Deployer sets wager, deploys contract and pays wager.
2. Attacher sees, accepts and pays wager.
3. In three iterations: 
  i.  Attacher plays stage and publishes time taken
  ii. Deployer observes time it took attacher, then plays stage and publishes time taken
  iii. Attacher observes time it took deployer
  iv. Program keeps track of time taken by each participant and incrementally stores it.
4. Program computes winner by comparing total time taken by both players.
5. Program pays winner both wagers or refunds both players in the case of a draw.
```

The phrase "In three iterations" indicates a loop in the game that runs three times. With this information we can implement the logic for our contract.
Main logic of our contract should now look like:

```
  Alice.only(() =>{
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  Alice.interact.informWaitingForAttacher();

  Bob.only(() => {
    interact.acceptWager(wager);
  })
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  
  Alice.interact.informAcceptedWager();

  var [ stage, totalTimeAlice, totalTimeBob ] = [0, 0, 0];
  invariant (balance() == 2 * wager);
  while(stage < 3) {
    commit();

    informNewRound();

    Bob.only(() => {
      const timeBob = declassify(interact.getTime());
    });
    Bob.publish(timeBob);
    commit();

    Alice.only(() => {
      interact.opponentReplay(timeBob);
      const timeAlice = declassify(interact.getTime());
    });
    Alice.publish(timeAlice);
    commit();

    Bob.only(() => {
      interact.opponentReplay(timeAlice);
    });
    Bob.publish();

    [ stage, totalTimeAlice, totalTimeBob ] = [ stage + 1, totalTimeAlice + timeAlice, totalTimeBob + timeBob ];
    continue;
  }

  if(totalTimeAlice == totalTimeBob) {
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("draw"));
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  }
  else if(totalTimeAlice > totalTimeBob){
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("bob"));
    });
  }
  else {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("alice"));
    });
  }
  
  commit();
});
```

The interact function `Alice.interact.informAcceptedWager()` is how the deployer knows when the attacher has accepted the wager and is there only to improve the UX flow of the game.

## Assertion Insertion
Due to simplicity of the program, there's no need for assertions in the code.

## Possible Additions
Our code works perfectly fine as it is now. But there are some points we can improve. To make our code cleaner, we can write two functions to compute winner, and pay winner respectively. We can also use an enum to represent the three possible outcomes of the game: Alice wins, Bob wins or nobody wins.

The enum can be written as:

```
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);
```

The function to compute the winner will need two arguments; total time it took Alice and total time it took Bob.

```
const winner = (totalTimeAlice, totalTimeBob) => {
  if(totalTimeAlice == totalTimeBob) {
    return DRAW;
  } else if(totalTimeAlice > totalTimeBob){
    return B_WINS;
  } else return A_WINS;
}
```

The function to pay winner will need four arguments. The outcome of the game, the price of the wager, and the Alice and Bob variables.


```
const payWinner = (outcome, wager, Alice, Bob) => {
  if (outcome == DRAW) {
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("draw"));
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  }
  else if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("alice"));
    });
  }
  else {
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("bob"));
    });
  }
}
```

These functions can be placed at the beginning of the program. The outcome computation and pay winner part of the contract can then be replaced with: 

```
const outcome = winner(totalTimeAlice, totalTimeBob);

payWinner(outcome, wager, Alice, Bob);

commit();

```

With all of these changes, our index.rsh file will look like this:
```
'reach 0.1';

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (totalTimeAlice, totalTimeBob) => {
  if(totalTimeAlice == totalTimeBob) {
    return DRAW;
  } else if(totalTimeAlice > totalTimeBob){
    return B_WINS;
  } else return A_WINS;
}

const payWinner = (outcome, wager, Alice, Bob) => {
  if (outcome == DRAW) {
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("draw"));
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  }
  else if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("alice"));
    });
  }
  else {
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.showWinner(Bytes(16).pad("bob"));
    });
  }
}

const Player = {
  ...hasRandom,
  getTime: Fun([], UInt),
  opponentReplay: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  showWinner: Fun([Bytes(16)], Null),
  informNewRound: Fun([], Null),
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
    informAcceptedWager: Fun([], Null),
    informWaitingForAttacher: Fun([], Null)
  });
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  const informNewRound = () => {
    each([Alice, Bob], () => {
      interact.informNewRound();
    });
  };

  Alice.only(() =>{
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  Alice.interact.informWaitingForAttacher();

  Bob.only(() => {
    interact.acceptWager(wager);
  })
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  
  Alice.interact.informAcceptedWager();

  var [ stage, totalTimeAlice, totalTimeBob ] = [0, 0, 0];
  invariant (balance() == 2 * wager);
  while(stage < 3) {
    commit();

    informNewRound();

    Bob.only(() => {
      const timeBob = declassify(interact.getTime());
    });
    Bob.publish(timeBob);
    commit();

    Alice.only(() => {
      interact.opponentReplay(timeBob);
      const timeAlice = declassify(interact.getTime());
    });
    Alice.publish(timeAlice);
    commit();

    Bob.only(() => {
      interact.opponentReplay(timeAlice);
    });
    Bob.publish();

    [ stage, totalTimeAlice, totalTimeBob ] = [ stage + 1, totalTimeAlice + timeAlice, totalTimeBob + timeBob ];
    continue;
  }

  const outcome = winner(totalTimeAlice, totalTimeBob);

  payWinner(outcome, wager, Alice, Bob);
  
  commit();
});
```

## Interaction Introduction
Now we have a complete contract backend and now can write the frontend. You can use any frontend library of your choice. In our case, we have chosen to use React.

```
import React, { useState } from 'react';
import { Views } from './utils/constants';
import './App.css';

//Components or Views
import TopNav from './Components/TopNav/TopNav';
import ConnectAccount from './Components/Views/ConnectAccount';
import FundAccount from './Components/Views/FundAccount';
import DeployerOrAttacher from './Components/Views/DeployerOrAttacher';
import Attach from './Components/Views/Attacher';
import Deploy from './Components/Views/Deployer';

//Reach
import * as backend from './build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'MainNet', MyAlgoConnect } ));
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };

function App(){
  const [ view, setView ] = useState(Views.CONNECT_ACCOUNT)
  const [ account, setAccount ] = useState({})
  const [ balance, setBalance ] = useState(0)

  const utils = {

    connectAccount: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        const balanceAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balanceAtomic, 4);
        setAccount(account);
        setBalance(balance)
        if (await reach.canFundFromFaucet()) {
          setView(Views.FUND_ACCOUNT)
        } else {
          setView(Views.DEPLOYER_OR_ATTACHER)
        }
        result = 'success'
      } catch (error) {
        result = 'failed'
      }
      return result
    },

    fundAccount: async (fundAmount) => {
      await reach.fundFromFaucet(account, reach.parseCurrency(fundAmount));
      setView(Views.DEPLOYER_OR_ATTACHER)
    },

    skipFundAccount: async () => {
      setView(Views.DEPLOYER_OR_ATTACHER)
    },

    selectDeployer: async () => {
      setView(Views.DEPLOY)
    },

    selectAttacher: async () => {
      setView(Views.ATTACH)
    },

    playAgain: async () => {
      setView(Views.DEPLOYER_OR_ATTACHER)
    },

    attach: (ctcInfoStr, attacher) => {
      const ctc = account.contract(backend, JSON.parse(ctcInfoStr));
      backend.Bob(ctc, attacher);
    },
    
    deploy: async (deployer, wager) => {
      const ctc = account.contract(backend);
      const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      deployer.setWagerAndDeadline(reach.parseCurrency(wager), deadline)
      backend.Alice(ctc, deployer)
      return JSON.stringify(await ctc.getInfo(), null, 2);
    }
  }

  return (
    <div className="App">
      <TopNav />

      {
        view === Views.CONNECT_ACCOUNT ? 
        <ConnectAccount connect={utils.connectAccount}/>
        : null
      }

      {
        view === Views.FUND_ACCOUNT ?
        <FundAccount balance={balance}  defaultFundAmt={defaults.defaultFundAmt} standardUnit={defaults.standardUnit} utils={utils}/>
        : null
      }

      {
        view === Views.DEPLOYER_OR_ATTACHER ?
        <DeployerOrAttacher utils={utils}/>
        : null
      } 

      {
        view === Views.DEPLOY ? 
        <Deploy reach={reach} balance={balance} standardUnit={defaults.standardUnit} utils={utils} defaultWager={defaults.defaultWager}/>
        : null
      }

      {
        view === Views.ATTACH ? 
        <Attach reach={reach} balance={balance} standardUnit={defaults.standardUnit} utils={utils} />
        : null
      }     

    </div>
  );
}

export default App;
```
In the Participant.js file we have:
```
import { Views } from "../utils/constants";
import { updateScore } from "../redux/utils/scores";

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
  async getTime() {
    //logic for game
    const time = await new Promise((resolve) => {
      this.utils.setResolver({
        resolve: (t) => resolve(t)
      })
      this.utils.setGetTime(true)
    })
    updateScore('you', this.round, time, this.dispatch)
    return time;
  }

  opponentReplay(time){ 
    //logic for opponent replay or view time it took opponent
    console.log('opponent time: ' + time)
    const timeDecimal = parseInt(time)
    updateScore('them', this.opponentRound, timeDecimal, this.dispatch)
    this.opponentRound++
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
```
In the Attacher.js file we have:
```
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
```

In the Deployer.js file we have:

```
import Participant from "./Participant";
import { Views } from "../utils/constants";

export default class Deployer extends Participant{

  setWagerAndDeadline(wager, deadline) { 
    this.wager = wager;
    this.deadline = deadline 
  }

  informAcceptedWager(){
    this.utils.setView(Views.ATTACH_SUCCESS)
  }

  informWaitingForAttacher(){
    this.utils.setView(Views.WAITING_FOR_ATTACHER)
  }
}
```
The frontend's structure is decentralized so you'll have to properly go through the repository to get the pieces together. The `/src/utils/game.js` file contains the game's logic which executes one of its three stages depending on the iteration of the contract's loop.

## Discussion
Congrats for finishing this workshop. You implemented the gold rush game that runs on the blockchain yourself.

If you found this workshop rewarding please let us know on [the Discord Community](https://discord.gg/AZsgcXu).

Thanks!!