import {View, StyleSheet} from "react-native";
import Square from "./Square";
import React, {useState} from "react"
import Figure from "./Figure";
import {Utils} from "./Utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
});

export default function Row({ white, row, rowArray }) {
    const offset = white ? 0 : 1;
    const [selected, setSelected] = useState(null)
    return (
        <View style={styles.container}>
            {rowArray.map((col, i) => {
                const color = (i + offset) % 2 === 1 ? 'black' : 'white';
                if(col) {
                    return <Figure backgroundColor={color} id={col} row={row} col={i} selector={[selected, setSelected]} path={`https://images.chesscomfiles.com/chess-themes/pieces/neo/150/${col}.png`} />
                }
                return <Square row={row} col={i} key={i} backgroundColor={color}/>
            })}
            </View>
    );
};
