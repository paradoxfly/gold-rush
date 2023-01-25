import React, { useState, useEffect } from 'react';
import { Views } from '../../../utils/constants';
import Canvas from '../../Canvas/Canvas';
import Attacher from '../../../Classes/Attacher';
import AcceptTerms from './AcceptTerms';
import Timeout from '../Common/Timeout'
import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import ShowWinner from '../Common/ShowWinner';
import Loader from '../../Loader/Loader'
import '../index.css'
import game from '../../../utils/game'
import StageOne from '../../../Stages/StageOne';
import StageTwo from '../../../Stages/StageTwo';
import StageThree from '../../../Stages/StageThree';
import { RectActions } from '../../../recoil/action/rectangle.action';
import { TimeActions } from '../../../recoil/action/time.action';
import { ScoreActions } from '../../../recoil/action/scores.action';
import { useRef } from 'react';

export default function Attach(props){
  const canvasRef = useRef(null)
  const rectActions = RectActions({ canvasRef })
  const timeActions = TimeActions()
  const scoreActions = ScoreActions()
  const dispatch = {
    ...rectActions,
    ...timeActions,
    ...scoreActions,
  }

  const { utils, reach, standardUnit } = props
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
            className='paste-contract-info'
            onChange={(e) => setCtcInfoStr(e.currentTarget.value)}
          />
          <br />
          <button
            disabled={!ctcInfoStr}
            onClick={
              () => {
                const hexString = parseInt(ctcInfoStr).toString(16)
                utils.attach(`{"type":"BigNumber", "hex": "0x0${hexString}"}`, Bob)
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
          <Canvas canvasRef={canvasRef}/>

          <button 
            disabled = {!play}
            onClick={ async () => {
              setPlay(false)
              const result = await game(dispatch, stages[round], stages[round].options)
              console.log(result)
              setTime(result)
              setHasPlayed(true)
              setView(Views.AWAITING_TURN)
              dispatch.updateScore('you', round, result)
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
         <ShowWinner round={round} winner={winner} deployer={false} playAgain={()=> { utils.playAgain() }}/>
        : null
      }
    </div>
    
  )
}