import {Image, Pressable} from "react-native";
import React, {useState} from "react"
import {useDispatch, useSelector, useStore} from "react-redux";
import {select} from "../reducers/chess";

export default function Figure({ backgroundColor, path, id, row, col }) {
    const selected = useSelector(state => state.selected)
    const blocked = useSelector(state => state.blocked)
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    function onPress() {
        if(id.startsWith(blocked)) return
        if(selected[0] === row && selected[1] === col) {
            setClicked(false)
            dispatch({type: "chess/select", payload: [null, null]})
        }
        if(selected.some(s => s == null)) {
            setClicked(true)
            dispatch({type: "chess/select", payload: [row, col]})
        }

    }
    backgroundColor = clicked ? "orange" : backgroundColor
    return (
        <Pressable onPress={onPress} style={{
            flex: 1,
            backgroundColor,
            alignItems: "center",
            padding: 4,
            justifyContent: "space-between",
        }}>
            <Image source={{uri: path}} style={{width: "100%", height: "100%"}}/>
        </Pressable>)
};
