import React from 'react';
import './index.css';
import { selectScore } from '../../redux/slices/scores.slice';
import { useSelector } from 'react-redux';
import { selectTime } from '../../redux/slices/time.slice';

export default function ScoreBoard(){
  const { you, them } = useSelector( selectScore )
  const time =  useSelector( selectTime)
  return(
    <div className='wrapper'>
      <div className='header'>
          <h4>
            SCOREBOARD
          </h4>
      </div>

      <div className='time'>
        {time ? `${time} secs` : ''}
      </div>

      <table className='scores'>
        <tbody>
          <tr>
            <th></th>
            <th>Round 1</th>
            <th>Round 2 </th>
            <th>Round 3</th>
          </tr>

          <tr>
            <th>You</th>
            <th>{you.round1 ? you.round1 : '-'}</th>
            <th>{you.round2 ? you.round2 : '-'}</th>
            <th>{you.round3 ? you.round3 : '-'}</th>
          </tr>

          <tr>
            <th>Them</th>
            <th>{them.round1 ? them.round1 : '-'}</th>
            <th>{them.round1 ? them.round2 : '-'}</th>
            <th>{them.round1 ? them.round3 : '-'}</th>
          </tr>
        </tbody>

      </table>
      
    </div>
  )
}