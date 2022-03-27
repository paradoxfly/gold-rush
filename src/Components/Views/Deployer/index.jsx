import React, { useState } from 'react';
import { Views } from '../../../utils/constants';
import Deployer from '../../../Classes/Deployer';
import Canvas from '../../Canvas/Canvas';
import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import Timeout from '../Common/Timeout';
import { useSelector } from 'react-redux';
import { selectAction } from '../../../redux/slices/action.slice';
import '../index.css'
import game from '../../../utils/game'
import StageOne from '../../../Stages/StageOne';
import StageTwo from '../../../Stages/StageTwo';

export default function Deploy(props){
  const { utils, reach, dispatch, defaultWager } = props
  const [ view, setView ] = useState(Views.DEPLOY)
  const [ ctcInfo, setCtcInfo ] = useState({})
  const [ wager, setWager ] = useState(defaultWager)
  const [resolver, setResolver] = useState({})
  const [ time, setTime ] = useState([])
  const [ opponentTime, setOpponentTime ] = useState([])
  const action = useSelector(selectAction).action

  const [ round, setRound ] = useState(0)
  const [ play, setPlay ] = useState(true)

  const stage1 = new StageOne(dispatch)
  const stage2 = new StageTwo(dispatch)
  const stages = [stage1, stage2]

  const setFunctions = {
    setView: (x) => { setView(x) },
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

  const Alice = new Deployer(reach, setFunctions, stages, dispatch)
  console.log(view)
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
              const info = await utils.deploy(Alice, wager)
              console.log(info)
              setCtcInfo(info)
              setView(Views.DEPLOYING)
              }}>
          Deploy</button>
        </>
        : null
      }

      {
        view === Views.DEPLOYING ? 
        <h2> Deploying... </h2> 
        : null
      }

      {
        view === Views.WAITING_FOR_ATTACHER ?
        <div>
          <h2>Waiting for attacher</h2> 
          <label>Contract Information</label>
          <textarea disabled value = {ctcInfo}/>
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