import { useCallback } from "react"
import { useRecoilState } from "recoil"
import { score } from "../state"


export const ScoreActions = () => {
    const [ _, setScore] = useRecoilState(score)

    /**
     * 
     * @param {String} who Can only be 'you' or 'them'
     * @param {Number} round 
     * @param {Number} score 
     * @returns null
     */
    const updateScore = useCallback((who, round, score_) => {
        console.log(who)
        console.log(round)
        console.log(score_)
        setScore(_score => {
            const whoScores = [ ..._score[who]]
            for(let i = 0; i < whoScores.length; i++){
                if(i === round ){
                    whoScores[i] = score_;
                    continue;
                }
                whoScores[i] = _score[i]
            } 
            const newScore = {
                ..._score,
                [who]: whoScores
            }
            console.log(newScore)
            return newScore
        })
    }, [setScore])

    return {
        updateScore
    }
}