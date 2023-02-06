import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { time } from "../state"


export const TimeActions = () => {
    const [ _, _setTime ] = useRecoilState(time)

    console.log(_)

    const incrementTime = useCallback(() => {
        _setTime(_time => ({
            time: _time.time + 1
        }))
    }, [_setTime])

    const setTime = useCallback((time) => {
        _setTime({
            time
        })
    }, [_setTime])

    const resetTime = useCallback(() => {
        _setTime({
            time: 0
        })
    }, [_setTime])

    return {
        incrementTime,
        setTime,
        resetTime
    }
}