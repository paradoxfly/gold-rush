'reach 0.1';

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

/**
 * 
 * @param timeAlice Total amount of time it took Alice to finish all three rounds
 * @param timeBob Total amount of time it took Bob to finish all three rounds
 * @returns integer that maps onto outcome enum
 */
const winner = (totalTimeAlice, totalTimeBob) => {
  if(totalTimeAlice == totalTimeBob) {
    return DRAW;
  } else if(totalTimeAlice > totalTimeBob){
    return B_WINS;
  } else return A_WINS;
}

/**
 * 
 * @param outcome 
 * @param wager 
 * @param Alice 
 * @param Bob 
 */
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
  showWinner: Fun([Bytes(16)], Null)
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

  /**
   * @description A function that calls the informTimeout interact interface function
   * on both Participants
   */
  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  //Alice inputs and publishes wager and deadline duration. Then she pays the wager
  Alice.only(() =>{
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  Alice.interact.informWaitingForAttacher();

  //Bob on joining the contract accepts wager before deadline.
  Bob.only(() => {
    interact.acceptWager(wager);
  })
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  
  Alice.interact.informAcceptedWager();

  //While loop that terminates after three iterations
  var [ stage, totalTimeAlice, totalTimeBob ] = [0, 0, 0];
  invariant (balance() == 2 * wager);
  while(stage < 3) {
    commit();

    //Bob plays his turn of the game stage and publishes how long it took
    Bob.only(() => {
      const timeBob = declassify(interact.getTime());
    });
    Bob.publish(timeBob);
    commit();

    //Alice plays her turn of the game stage and publishes how long it took
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