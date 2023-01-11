import { atom } from "recoil";

export const connect = atom({
    key: 'canConnect',
    default: true
})

export const connecting = atom({
    key: 'connecting',
    default: false
})