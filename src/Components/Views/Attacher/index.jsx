import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAction } from '../../../redux/slices/action.slice';
import { Views } from '../../../utils/constants';
import Canvas from '../../Canvas/Canvas';
import Attacher from '../../../Classes/Attacher';
import AcceptTerms from './AcceptTerms';
import Timeout from '../Common/Timeout'
import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import Loader from '../../Loader/Loader'
import '../index.css'
import game from '../../../utils/game'
import StageOne from '../../../Stages/StageOne';
import StageTwo from '../../../Stages/StageTwo';
import StageThree from '../../../Stages/StageThree';
import { updateScore } from '../../../redux/utils/scores';


export default function Attach(props){
  const dispatch = useDispatch()
  const { utils, reach, standardUnit } = props
  const action = useSelector(selectAction).action
  const [view, setView] = useState(Views.ATTACH)
  const [wager, setWager ] = useState(0)
  const [resolver, setResolver] = useState({})
  const [ctcInfoStr, setCtcInfoStr] = useState()
  const [ time, setTime ] = useState()
  const [ opponentTime, setOpponentTime ] = useState([])
  const [ round, setRound ] = useState(-1) //should be -1
  const [ play, setPlay ] = useState(true)
  const [ hasPlayed, setHasPlayed ] = useState(false)
  const [ getTime, setGetTime ] = useState(false)
  const [ winner, setWinner ] = useState('')    //a (alice/deployer), b (bob/attacher) or d (draw)

  const stage1 = new StageOne(dispatch)
  const stage2 = new StageTwo(dispatch)
  const stage3 = new StageThree(dispatch)
  const stages = [stage1, stage2, stage3]

  const setFunctions = {
    setView: (x) => { setView(x) },
    setWager:  (x) => { setWager(x) },
    setResolver: (x) => { setResolver(x) },
    setOpponentTime: (x) => { 
      const copy = [...opponentTime]
      setOpponentTime(copy.push(x))
    },
    setRound: (x) => { setRound(x) },
    setPlay: (x) => { setPlay(x) },
    setGetTime: (x) => { setGetTime(x) },
    setWinner: (x) => { setWinner(x) }
  }

  useEffect(() => {
    if(hasPlayed && getTime){
      resolver.resolve(time)
      setHasPlayed(false)
      setGetTime(false)
    }
  }, [ hasPlayed, resolver, time, getTime ])

  const Bob = new Attacher(reach, setFunctions, dispatch)

  return(
    <div className='div'>
    
      {
        view === Views.ATTACH ?
        <>
          <h4>Please paste the contract info to attach to:</h4>
          <textarea spellCheck="false"
            className='ContractInfo'
            onChange={(e) => setCtcInfoStr(e.currentTarget.value)}
            placeholder='{}'
          />
          <br />
          <button
            disabled={!ctcInfoStr}
            onClick={
              () => {
                utils.attach(ctcInfoStr, Bob)
                setCtcInfoStr(false)
              }}
          >Attach</button>
        </>
        : null
      }

      {
        view === Views.ACCEPT_TERMS ?
        <AcceptTerms wager={wager} standardUnit={standardUnit} acceptTerms={resolver.resolve}/>
        : null
      }

      {
        view === Views.ATTACHING ? 
        <Loader>Attaching to contract</Loader> 
        : null
      }
      {
        view === Views.TIMEOUT ?
        <Timeout>TIMEOUT! You took too long to accept wager</Timeout>
        : null
      }

      {
        view === Views.PLAY_TURN ?
        <>
          <ScoreBoard round={round}/>
          <Canvas action = { action }/>

          <button 
            disabled = {!play}
            onClick={ async () => {
              setPlay(false)
              const result = await game(dispatch, stages[round], stages[round].options)
              console.log(result)
              setTime(result)
              setHasPlayed(true)
              setView(Views.AWAITING_TURN)
              updateScore('you', round, result, dispatch)
          } }>
            Start Game
          </button>
          
        </>
         
        : null
      }

      {
        view === Views.AWAITING_TURN ?
        <>
          <ScoreBoard round={round}/>
          <h2>This might take a few minutes.</h2>
          <Loader>Waiting For Opponent</Loader>
        </>        
        : null
      }

      {
        view === Views.SHOW_WINNER ?
        <> 
          <ScoreBoard round={round}/>
          <h2>
            { 
              winner === 'b' && 
              <Loader>YOU WIN!!!</Loader>
            }

            { 
              winner === 'a' && 
              <Loader>YOU LOSE!!!</Loader>
            }

            { 
              winner === 'd' && 
              <Loader>NOBODY WINS!!</Loader>
            }
          </h2>
        </>
        : null
      }
    </div>
    
  )
}