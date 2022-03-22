import React, { useState } from 'react';
import { Views } from '../../../utils/constants';
import Deployer from '../../../Classes/Deployer';
import Canvas from '../../Canvas/Canvas';
import Timeout from '../Common/Timeout';
import { useSelector } from 'react-redux';
import { selectAction } from '../../../redux/slices/action.slice';
import '../index.css'

export default function Deploy(props){
  const { utils, reach, stages, dispatch, defaultWager } = props
  const [ view, setView ] = useState(Views.PLAY_TURN)
  const [ wager, setWager ] = useState(defaultWager)
  const [ time, setTime ] = useState([])
  const [ opponentTime, setOpponentTime ] = useState([])
  const action = useSelector(selectAction).action
  const setFunctions = {
    setView: (x) => { setView(x) },
    setTime: (x) => { 
      const copy = [...time]
      setTime(copy.push(x))
    },
    setOpponentTime: (x) => { 
      const copy = [...opponentTime]
      setOpponentTime(copy.push(x))
    }
  }

  const Alice = new Deployer(reach, setFunctions, stages, dispatch)

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
            onClick={() => utils.deploy(Alice, wager)}>
          Deploy</button>
        </>
        : null
      }

      {
        view === Views.WAITING_FOR_ATTACHER ?
        <h2>Waiting for attacher</h2> 
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
        view === Views.AWAITING_TURN ?
        <h2>Opponent is playing his turn.. This might take a few minutes.</h2>
        : null
      }

      {
        view === Views.PLAY_TURN ?
        <Canvas action = { action }/> 
        : null
      }

      
    </div>
  )
}