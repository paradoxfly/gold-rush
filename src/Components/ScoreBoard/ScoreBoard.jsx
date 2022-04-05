import React from 'react';
import './index.css';
import { selectScore } from '../../redux/slices/scores.slice';
import { useSelector } from 'react-redux';
import { selectTime } from '../../redux/slices/time.slice';

export default function ScoreBoard(){
  const { you, them } = useSelector( selectScore )
  const time =  useSelector( selectTime )
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
            <th>{you[0] ? you[0] : '-'}</th>
            <th>{you[1] ? you[1] : '-'}</th>
            <th>{you[2]? you[2]: '-'}</th>
          </tr>

          <tr>
            <th>Them</th>
            <th>{them[0] ? them[0] : '-'}</th>
            <th>{them[1] ? them[1] : '-'}</th>
            <th>{them[2] ? them[2] : '-'}</th>
          </tr>
        </tbody>

      </table>
      
    </div>
  )
}