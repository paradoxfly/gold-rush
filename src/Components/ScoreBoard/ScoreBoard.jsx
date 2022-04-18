import React from 'react';
import './index.css';
import { selectScore } from '../../redux/slices/scores.slice';
import { useSelector } from 'react-redux';
import { selectTime } from '../../redux/slices/time.slice';

export default function ScoreBoard({round}){
  const { you, them } = useSelector( selectScore )
  const time =  useSelector( selectTime )
  return(
    <div className='wrapper'>
      {/* <div className='header'>
          <h4>
            SCOREBOARD
          </h4>
      </div> */}

      <div className='time'>
       <span className="header"></span> {time ? `${time}` : ''}
      </div>

      <table className='scores'>
        <tbody>
          <tr>
            <th></th>
            <th className={ round === 0 ? 'active': ''}>Round 1</th>
            <th className={ round === 1 ? 'active': ''}>Round 2 </th>
            <th className={ round === 2 ? 'active': ''}>Round 3</th>
          </tr>

          <tr>
            <th>You</th>
            <th className={ round === 0 ? 'active': ''}><span className={you[0] ? 'entrance' : ''}>{you[0] ? you[0] : '-'}</span></th>
            <th className={ round === 1 ? 'active': ''}><span className={you[1] ? 'entrance' : ''}>{you[1] ? you[1] : '-'}</span></th>
            <th className={ round === 2 ? 'active': ''}><span className={you[2] ? 'entrance' : ''}>{you[2]? you[2]: '-'}</span></th>
          </tr>

          <tr>
            <th>Them</th>
            <th className={ round === 0 ? 'active': ''}><span className={them[0] ? 'entrance' : ''}>{them[0] ? them[0] : '-'}</span></th>
            <th className={ round === 1 ? 'active': ''}><span className={them[1] ? 'entrance' : ''}>{them[1] ? them[1] : '-'}</span></th>
            <th className={ round === 2 ? 'active': ''}><span className={them[2] ? 'entrance' : ''}>{them[2] ? them[2] : '-'}</span></th>
          </tr>
        </tbody>

      </table>
      
    </div>
  )
}