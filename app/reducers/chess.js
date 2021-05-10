import {createAction, createReducer} from "@reduxjs/toolkit";

export const block = createAction("chess/block")
export const updateMap = createAction("chess/updateMap")
export const select = createAction("chess/select")
export const move = createAction("chess/move")
const initialState = {selected: [null, null], map: null, blocked: null, lastTurn: {from: null, to: null}, history: []}

export const chessReducer = createReducer(initialState, (builder => {
    builder
        .addCase(block, ((state, action) => {
            state.blocked = action.payload
        }))
        .addCase(move, ((state, {payload}) => {
            state.map[payload.to[0]][payload.to[1]] = state.map[payload.from[0]][payload.from[1]]
            state.map[payload.from[0]][payload.from[1]] = ""
            const turn = {from: payload.from, to: payload.to}
            state.lastTurn = turn
            state.history.push(turn)


        }))
        .addCase(updateMap, ((state, action) => {
            state.map = action.payload
        }))
        .addCase(select, ((state, action) => {
            state.selected = action.payload
        }))
}))