import { atom } from "recoil";
import { RECTANGLE_ACTIONS } from "../../utils/constants";

export const rectangle = atom({
    key: 'rectangle',
    default: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        color: 'maroon',
        action: RECTANGLE_ACTIONS.DRAW_RECTANGLE
    }
});
