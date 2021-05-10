import React from "react"
import Board from "./Board";
import {Button, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
export default function ChessBoard() {
    const dispatch = useDispatch()
    function blockWhite() {
        dispatch({type: "chess/block", payload: "w"})
    }
    function blockBlack() {
        dispatch({type: "chess/block", payload: "b"})
    }
    function unlock() {
        dispatch({type: "chess/block", payload: null})
    }
    return (
        <View style={{
            width: 350,
            height: 350
        }}>
            <Board/>
        </View>
    )
};
