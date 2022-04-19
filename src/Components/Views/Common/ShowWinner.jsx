import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import Outcome from '../../Outcome/Outcome';

export default function ShowWinner({ round, winner, deployer, playAgain }){
  return(
    <>
      <ScoreBoard round={round}/>
      <h2>
        { 
          winner === 'a' ?
          deployer ? <Outcome>YOU WIN!!!</Outcome> : <Outcome>YOU LOSE!!!</Outcome>
          : null
        }

        { 
          winner === 'b' ? 
          deployer ? <Outcome>YOU LOSE!!!</Outcome> : <Outcome>YOU WIN!!!</Outcome>
          : null
        }

        { 
          winner === 'd' && 
          <Outcome>NOBODY WINS!!</Outcome>
        }
      </h2>
      <button onClick={playAgain} style={{marginTop: '80px'}}>Play again</button>
    </>
  )
}