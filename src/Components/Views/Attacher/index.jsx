import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAction } from '../../../redux/slices/action.slice';
import { Views } from '../../../utils/constants';
import Canvas from '../../Canvas/Canvas';
import Attacher from '../../../Classes/Attacher';
import AcceptTerms from './AcceptTerms';
import Timeout from '../Common/Timeout'
import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import '../index.css'
import game from '../../../utils/game'
import StageOne from '../../../Stages/StageOne';
import StageTwo from '../../../Stages/StageTwo';


export default function Attach(props){
  const { utils, reach, standardUnit, dispatch } = props
  const action = useSelector(selectAction).action
  const [view, setView] = useState(Views.ATTACH)
  const [wager, setWager ] = useState(0)
  const [resolver, setResolver] = useState({})
  const [ctcInfoStr, setCtcInfoStr] = useState()
  const [ time, setTime ] = useState([])
  const [ opponentTime, setOpponentTime ] = useState([])
  const [ round, setRound ] = useState(0)
  const [ play, setPlay ] = useState(true)

  const stage1 = new StageOne(dispatch)
  const stage2 = new StageTwo(dispatch)
  const stages = [stage1, stage2]

  const setFunctions = {
    setView: (x) => { setView(x) },
    setWager:  (x) => { setWager(x) },
    setResolver: (x) => { setResolver(x) },
    setTime: (x) => { 
      const copy = [...time]
      setTime(copy.push(x))
    },
    setOpponentTime: (x) => { 
      const copy = [...opponentTime]
      setOpponentTime(copy.push(x))
    },
    setRound: (x) => { setRound(x) },
    setPlay: (x) => { setPlay(x) }
  }

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
            onClick={() => utils.attach(ctcInfoStr, Bob)}
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
        <h2> Attaching... </h2> 
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
          <ScoreBoard />
          <Canvas action = { action }/>

          <button 
            disabled = {!play}
            onClick={ async () => {
              setPlay(false)
              const time = await game(dispatch, stages[round], stages[round].options)
              console.log(time)
              resolver.resolve(time)
          } }>
            Start Game
          </button>
          
        </>
         
        : null
      }

      {
        view === Views.AWAITING_TURN ?
        <>
          <ScoreBoard/>
          <h2>Opponent is playing his turn.. This might take a few minutes.</h2>
        </>        
        : null
      }
    </div>
    
  )
}