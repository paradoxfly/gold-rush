import { atom } from "recoil";
import { RECTANGLE_ACTIONS } from "../../utils/constants";

export const lava = atom({
    key: 'rectangle',
    default: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        color: 'red',
        action: RECTANGLE_ACTIONS.DRAW_RECTANGLE
    }
});
