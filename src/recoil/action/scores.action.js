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
        setScore(_score => {
            console.log(_score)
            const whoScores = [ ..._score[who]]
            for(let i = 0; i < whoScores.length; i++){
                if(i === round ){
                    whoScores[i] = score_;
                    break;
                }
            } 
            const newScore = {
                ..._score,
                [who]: whoScores
            }
            return newScore
        })
    }, [setScore])

    const resetScore = useCallback(() => {
        setScore({
            you: [0,0,0],
            them: [0,0,0]
        })
    }, [setScore])

    return {
        updateScore,
        resetScore
    }
}