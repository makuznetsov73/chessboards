import React from "react";
import { View } from "react-native";
import Row from "./Row";
import {useDispatch, useSelector} from "react-redux";

function createArray(x, y) {
    return new Array(y).fill(null).map(() => new Array(y).fill(null))
}
function Board({x = 8, y = 8, pos = [
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"]
    
]}) {
    const pre = useSelector(state => state.map)
    const dispatch = useDispatch()
    if(!pre) {
        dispatch({type: "chess/updateMap", payload: createArray(x, y).map((rowArray, row) => {
                return rowArray.map((col, colIndex) => {
                    if(pos?.[row]?.[colIndex]) {
                        return pos?.[row]?.[colIndex]
                    }
                    return col
                })
            })})
    }
    const map = useSelector(state => state.map)
    return (
            <View style={{ flex: 1 }}>
                {map.map((row, index) => (
                    <Row white={index % 2 === 0} row={index} rowArray={row}/>
                ))}
            </View>
    );
}

export default Board;
