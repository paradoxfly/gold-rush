import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Constants, RECTANGLE_ACTIONS } from "../../utils/constants";
import { rectangle } from "../state";


export const RectActions = () => {
    const [ _, setRect ] = useRecoilState(rectangle);

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

    const drawStageArea = useCallback((payload) => {
        const parsed = payload.map(array => {
            array[0] = (array[0] - 1) * Constants.SCALE_FACTOR
            array[1] = (array[1] - 1) * Constants.SCALE_FACTOR
            array[2] = array[2] * Constants.SCALE_FACTOR
            array[3] = array[3] * Constants.SCALE_FACTOR
            return array
        })
        setRect({
            rectangles: [...parsed],
            action: RECTANGLE_ACTIONS.DRAW_STAGE
        })
    }, [setRect])

    const clearCanvas = useCallback(() => {
        setRect({
            action: RECTANGLE_ACTIONS.CLEAR_CANVAS
        })
    }, [setRect])

    return {
        drawRectangle,
        clearRectangle,
        drawStageArea,
        clearCanvas
    }
}