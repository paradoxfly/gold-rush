import React from 'react';
import './index.css';

export default function ScoreBoard(props){

  return(
    <table>
      <tr>
        <th>
          <h2>
            SCOREBOARD
          </h2>
        </th>
        <th className='time'>
          <p>Time</p>
          <span>time</span>
        </th>
      </tr>

      <tr>
        <th>
          <p>Name</p>
        </th>
        <th>
          <p>Round 1</p>
        </th>
        <th>
          <p>Round 2</p>
        </th>
        <th>
          <p>Round 3</p>
        </th>
      </tr>

      <tr>
        <th>
          <p>You</p>
        </th>
        <th>
          <p>time 1</p>
        </th>
        <th>
          <p>time 2</p>
        </th>
        <th>
          <p>time 3</p>
        </th>
      </tr>

      <tr>
        <th>
          <p>Your Opponent</p>
        </th>
        <th>
          <p>time 1</p>
        </th>
        <th>
          <p>time 2</p>
        </th>
        <th>
          <p>time 3</p>
        </th>
      </tr>

    </table>
  )
}