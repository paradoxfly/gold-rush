import { atom } from "recoil";

export const score = atom({
    key: 'scores',
    default: {
        you: [0,0,0],
        them: [0,0,0]
    }
})