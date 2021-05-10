import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, BackHandler, SectionList, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { GamePreview } from './../data/gamePreview';

class GameLeaderBoardScreen extends Component {
    state = {  }

    gamePreview;

    constructor(props) {
        super(props)
        this.gamePreview = new GamePreview("Chess", "Regular chess", "", "5");
        this.state = {
            tableHead: ['Username', 'Elo'],
            tableData: this.getLeaders("Chess")
          }
    }

    getLeaders(gameName) {
        return [];
    }

    backAction = () => {
        this.props.history.goBack();
        return true;
    } 
    
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    render() { 
        const state = this.state;
        let leaderboardTable;
        if (state.tableData.length === 0) {
            leaderboardTable = 
                <Text style={styles.row}>Information is not available or there were no players in this game yet</Text>
        } else {
            leaderboardTable = 
                <View style={styles.containertable}>
                    <Table borderStyle={{borderColor: 'red'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    {
                        state.tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.row}>
                            {
                            rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                            ))
                            }
                        </TableWrapper>
                        ))
                    }
                    </Table>
                </View>
        }
        return ( 
            <View>
                <Text style={styles.pageHeader}>{this.gamePreview.game + " leaderboard"}</Text>
                <View>
                    {leaderboardTable}
                </View>
            </View> 
        );
    }
};
 
export default GameLeaderBoardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHeader: {
        textAlign: 'center',
        fontSize: 24,
        color: '#2196F3',
        lineHeight: 50,
    },
    row: {
        backgroundColor: '#fff',
        fontSize: 18,
        paddingHorizontal: 10,
    }
});