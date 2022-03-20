import { incrementTime, setTime } from "../slices/time.slice";

export function incrementTimeByOne(dispatch){
  dispatch( incrementTime() )
}

export function setTimeToValue(dispatch, payload){
  dispatch( setTime( payload) )
}