import {Pressable} from "react-native";
import React from "react"
import {useDispatch, useSelector} from "react-redux";

export default function Square({ backgroundColor, row, col }) {
    const selected = useSelector(state => state.selected)
    const dispatch = useDispatch()
    function onPress() {
        if(selected.some(s => s != null)) {
            dispatch({type: "chess/move", payload: {from: [selected[0], selected[1]], to: [row, col]}})
            dispatch({type: "chess/select", payload: [null, null]})
        }
    }
    return (
        <Pressable onPress={onPress}
            style={{
                flex: 1,
                backgroundColor,
                padding: 4,
                justifyContent: "space-between",
            }}
        />)
};
