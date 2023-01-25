import { useCallback } from "react";
import { Constants } from "../../utils/constants";


export const RectActions = ({ canvasRef }) => {
    const drawRectangle = useCallback((x, y, width, height, color) => {
        const context = canvasRef.current.getContext('2d')
        context.fillStyle = color;
        context.fillRect(
            (x-1) * Constants.SCALE_FACTOR,
            (y-1) * Constants.SCALE_FACTOR,
            width* Constants.SCALE_FACTOR,
            height* Constants.SCALE_FACTOR
        )
    }, [canvasRef])

    const clearRectangle = useCallback((x, y, width, height) => {
        const context = canvasRef.current.getContext('2d')
        context.clearRect(
            (x-1) * Constants.SCALE_FACTOR,
            (y-1) * Constants.SCALE_FACTOR,
            width* Constants.SCALE_FACTOR,
            height* Constants.SCALE_FACTOR
          )
    }, [canvasRef])

    const drawStageArea = useCallback((payload) => {
        const context = canvasRef.current.getContext('2d')
        const parsed = payload.map(array => {
            array[0] = (array[0] - 1) * Constants.SCALE_FACTOR
            array[1] = (array[1] - 1) * Constants.SCALE_FACTOR
            array[2] = array[2] * Constants.SCALE_FACTOR
            array[3] = array[3] * Constants.SCALE_FACTOR
            return array
        })

        for(let rect of parsed){
            context.fillStyle = rect[4];
            context.fillRect(
              rect[0],
              rect[1],
              rect[2],
              rect[3]
            )
          }
    }, [canvasRef])

    const clearCanvas = useCallback(() => {
        const context = canvasRef.current.getContext('2d')

        let canvasWidth = Constants.CANVAS_WIDTH * Constants.SCALE_FACTOR
        let canvasHeight = Constants.CANVAS_HEIGHT * Constants.SCALE_FACTOR
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    }, [canvasRef])

    return {
        drawRectangle,
        clearRectangle,
        drawStageArea,
        clearCanvas
    }
}