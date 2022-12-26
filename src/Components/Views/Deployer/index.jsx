import React, { useState, useEffect } from 'react';
import { Views } from '../../../utils/constants';
import Deployer from '../../../Classes/Deployer';
import Canvas from '../../Canvas/Canvas';
import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import ShowWinner from '../Common/ShowWinner';
import Loader from "../../Loader/Loader";
import Timeout from '../Common/Timeout';
import '../index.css'
import game from '../../../utils/game'
import StageOne from '../../../Stages/StageOne';
import StageTwo from '../../../Stages/StageTwo';
import StageThree from '../../../Stages/StageThree';
import { useRecoilState } from "recoil";
import { rectangle } from '../../../recoil/state';
import { RectActions } from '../../../recoil/action/rectangle.action';
import { TimeActions } from '../../../recoil/action/time.action';
import { ScoreActions } from '../../../recoil/action/scores.action';

export default function Deploy(props){
  const rectActions = RectActions()
  const timeActions = TimeActions()
  const scoreActions = ScoreActions()
  const dispatch = {
    ...rectActions,
    ...timeActions,
    ...scoreActions
  }

  const { utils, reach, defaultWager } = props
  const [ view, setView ] = useState(Views.DEPLOY) //should be DEPLOY
  const [ ctcInfo, setCtcInfo ] = useState({})
  const [ wager, setWager ] = useState(defaultWager)
  const [resolver, setResolver] = useState({})
  const [ time, setTime ] = useState()
  const [ opponentTime, setOpponentTime ] = useState([])
  const [ rect ] = useRecoilState(rectangle)

  const [ round, setRound ] = useState(-1) //should be -1
  const [ play, setPlay ] = useState(true)
  const [ hasPlayed, setHasPlayed ] = useState(false)
  const [ getTime, setGetTime ] = useState(false)
  const [ winner, setWinner ] = useState('')

  const stage1 = new StageOne(dispatch)
  const stage2 = new StageTwo(dispatch)
  const stage3 = new StageThree(dispatch)
  const stages = [ stage1, stage2, stage3 ]

  const setFunctions = {
    setView: (x) => { setView(x) },
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

  const Alice = new Deployer(reach, setFunctions, dispatch)
  return(
    <div className='div'>
      {
        view === Views.DEPLOY ?
        <>
          <h4>Please specify amount you want to wager:</h4>
          <input
            type='number'
            className='ContractInfo'
            value={wager}
            min='0'
            onChange={(e) => setWager(e.currentTarget.value)}/>
          <br />
          <button
            disabled={ ! (wager > 0) }
            onClick={ async () => {
              setView(Views.DEPLOYING)
              const info = await utils.deploy(Alice, wager)
              console.log(info)
              setCtcInfo(info)
              }}>
          Deploy</button>
        </>
        : null
      }

      {
        view === Views.DEPLOYING ? 
        <Loader>Deploying Contract</Loader> 
        : null
      }

      {
        view === Views.WAITING_FOR_ATTACHER ?
        <div>
          <label>Contract Information</label><br/>
          <textarea disabled value = {ctcInfo} className='high-index'/>
          <h3>WAIT FOR ATTACHER</h3>
        </div>
        
        : null
      }

      {
        view === Views.ATTACH_SUCCESS ?
        <h2>Opponent Successfully attached to contract and paid wager</h2>
        : null
      }

      {
        view === Views.TIMEOUT ?
        <Timeout>Timeout!! Took too long for Opponent to accept wager</Timeout>
        : null
      }

      {
        view === Views.PLAY_TURN ?
        <>
          <ScoreBoard round={round}/>
          <Canvas rectangle={rect}/>

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
        <> 
          <ShowWinner round={round} winner={winner} deployer={true} playAgain={()=> { utils.playAgain() }}/>
        </>
        : null
      }

      {/* <button onClick={async () => {
        const time = await game(dispatch, stage2, stage2.options)
        console.log(time)
      }}>Click me</button> */}

      
    </div>
  )
}