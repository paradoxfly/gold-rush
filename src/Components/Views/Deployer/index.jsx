import React, { useState } from 'react';
import { Views } from '../../../utils/constants';
import Deployer from '../../../Classes/Deployer';
import Canvas from '../../Canvas/Canvas';
import Timeout from './Timeout';
import { useSelector } from 'react-redux';
import { selectAction } from '../../../redux/slices/action.slice';
import '../index.css'

export default function Deploy(props){
  const { utils, reach, stages, dispatch, defaultWager } = props
  const [ view, setView ] = useState(Views.PLAY_TURN)
  const [ wager, setWager ] = useState(defaultWager)
  const action = useSelector(selectAction).action
  const setFunctions = {
    setView: (x) => { setView(x) },
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
        <h3>Waiting for attacher</h3> 
        : null
      }

{
        view === Views.TIMEOUT ?
        <Timeout />
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