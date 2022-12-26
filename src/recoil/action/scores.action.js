import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { score } from "../state"


export const ScoreActions = () => {
    const [ _score, setScore] = useRecoilState(score)

    /**
     * 
     * @param {String} who Can only be 'you' or 'them'
     * @param {Number} round 
     * @param {Number} score 
     * @returns null
     */
    const updateScore = useCallback((who, round, score_) => {
        setScore({
            ..._score,
            [who]: _score[who].splice(round, 1, score_)
        })
    }, [_score, setScore])

    return {
        updateScore
    }
}