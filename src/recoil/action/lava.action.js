import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Constants, RECTANGLE_ACTIONS } from "../../utils/constants";
import { lava } from "../state";


export const LavaActions = () => {
    const [ _, setRect ] = useRecoilState(lava);

    const drawRectangle = useCallback((x, y, width, height, color) => {
        const result = {
            x: (x-1) * Constants.SCALE_FACTOR,
            y: (y-1) * Constants.SCALE_FACTOR,
            width: width * Constants.SCALE_FACTOR,
            height: height * Constants.SCALE_FACTOR,
            action: RECTANGLE_ACTIONS.DRAW_RECTANGLE,
            color
        }
        
        setRect(result)
    }, [setRect])

    const clearRectangle = useCallback((x, y, width, height) => {
        setRect({
            x: (x-1) * Constants.SCALE_FACTOR,
            y: (y-1) * Constants.SCALE_FACTOR,
            width: width * Constants.SCALE_FACTOR,
            height: height * Constants.SCALE_FACTOR,
            action: RECTANGLE_ACTIONS.CLEAR_RECTANGLE
        })
    }, [setRect])

    return {
        drawRectangle,
        clearRectangle,
    }
}