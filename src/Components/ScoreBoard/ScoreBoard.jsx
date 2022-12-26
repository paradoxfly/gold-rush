import React from 'react';
import './index.css';
import { useRecoilState } from 'recoil';
import { score, time as recoilTime } from '../../recoil/state';

export default function ScoreBoard({round, showTotal}){
  const [ _time ] = useRecoilState(recoilTime)
  const [ _score ] = useRecoilState(score)

  const { you, them } = _score
  const { time } = _time
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
            <th className={ showTotal? '' : round === 0 ? 'active': ''}>Round 1</th>
            <th className={ showTotal? '' : round === 1 ? 'active': ''}>Round 2 </th>
            <th className={ showTotal? '' : round === 2 ? 'active': ''}>Round 3</th>
            { showTotal && <th className='active'>Total</th> }
          </tr>

          <tr>
            <th>You</th>
            <th className={ showTotal? '' : round === 0 ? 'active': ''}><span className={you[0] ? 'entrance' : ''}>{you[0] ? you[0] : '-'}</span></th>
            <th className={ showTotal? '' : round === 1 ? 'active': ''}><span className={you[1] ? 'entrance' : ''}>{you[1] ? you[1] : '-'}</span></th>
            <th className={ showTotal? '' : round === 2 ? 'active': ''}><span className={you[2] ? 'entrance' : ''}>{you[2]? you[2]: '-'}</span></th>
            {
              showTotal && 
              <th className='active'> 
                <span className='total'>{you[0] + you[1] + you[2]} seconds</span>
              </th>
            }
            
          </tr>

          <tr>
            <th>Them</th>
            <th className={ showTotal? '' : round === 0 ? 'active': ''}><span className={them[0] ? 'entrance' : ''}>{them[0] ? them[0] : '-'}</span></th>
            <th className={ showTotal? '' : round === 1 ? 'active': ''}><span className={them[1] ? 'entrance' : ''}>{them[1] ? them[1] : '-'}</span></th>
            <th className={ showTotal? '' : round === 2 ? 'active': ''}><span className={them[2] ? 'entrance' : ''}>{them[2] ? them[2] : '-'}</span></th>
            {
              showTotal &&
              <th className='active'> 
                <span className='total'>{them[0] + them[1] + them[2]} seconds</span>
              </th>
            }
          </tr>
        </tbody>

      </table>
      
      
    </div>
  )
}