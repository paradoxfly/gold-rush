import React, { useState, useEffect } from 'react';
import { Views } from '../../../utils/constants';
import Deployer from '../../../Classes/Deployer';
import Canvas from '../../Canvas/Canvas';
import ScoreBoard from '../../ScoreBoard/ScoreBoard';
import Loader from "../../Loader/Loader";
import Timeout from '../Common/Timeout';
import { useSelector, useDispatch } from 'react-redux';
import { selectAction } from '../../../redux/slices/action.slice';
import '../index.css'
import game from '../../../utils/game'
import StageOne from '../../../Stages/StageOne';
import StageTwo from '../../../Stages/StageTwo';
import StageThree from '../../../Stages/StageThree';

export default function Deploy(props){
  const dispatch = useDispatch()
  const { utils, reach, defaultWager } = props
  const [ view, setView ] = useState(Views.DEPLOY)
  const [ ctcInfo, setCtcInfo ] = useState({})
  const [ wager, setWager ] = useState(defaultWager)
  const [resolver, setResolver] = useState({})
  const [ time, setTime ] = useState()
  const [ opponentTime, setOpponentTime ] = useState([])
  const action = useSelector(selectAction).action

  const [ round, setRound ] = useState(0)
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
          <textarea disabled value = {ctcInfo}/>
          <Loader>Waiting for attacher</Loader> 
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
              winner === 'a' && 
              <Loader>YOU WIN!!!</Loader>
            }

            { 
              winner === 'b' && 
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

      {/* <button onClick={async () => {
        const time = await game(dispatch, stage2, stage2.options)
        console.log(time)
      }}>Click me</button> */}

      
    </div>
  )
}