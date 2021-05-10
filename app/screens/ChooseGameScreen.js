import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, BackHandler, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { GamePreview } from './../data/gamePreview';

export default class ChooseGameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Game', 'Description', 'Author', 'Rating', ''],
          tableData:
            this.getGames(),
    
        }
    }

    getGames() {
        var gamePreview = new GamePreview("Chess", "Regular chess", "", "5");
        var gamePreview1 = new GamePreview("Not chess", "Not regular chess", "", "4");
        return [gamePreview,
                gamePreview1];
    }

    getGamesPage(pageNumber) {
        //TODO
    }

    getGamesByName(name) {
        //TODO
    }

    playGame(gameName) {
        this.props.history.push("/games/game")
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

        return (
            <View style={styles.containerTable}>
                <Text style={styles.pageHeader}>                          Choose the game                       </Text>
                <View style={styles.listWrapper}>
                            <Text style={styles.rowHeader}>{this.state.tableHead[0]}</Text>
                            <Text style={styles.rowHeader}>{this.state.tableHead[1]}</Text>
                            <Text style={styles.rowHeader}>{this.state.tableHead[2]}</Text>
                            <Text style={styles.rowHeader}>{this.state.tableHead[3]}</Text>
                            <Text style={styles.rowHeader}></Text>
                        </View>
                <FlatList
                    data={this.state.tableData}
                    renderItem={({item}) => 
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>{item.game}</Text>
                            <Text style={styles.row}>{item.description}</Text>
                            <Text style={styles.row}>{item.author}</Text>
                            <Text style={styles.row}>{item.rating}</Text>
                            <Button style={styles.row} title="Play" onPress={() => {this.playGame(item.game)}}/>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    pageHeader: {
        textAlign: 'center',
        fontSize: 24,
        color: '#2196F3',
        lineHeight: 50,
    },

    tablecontainer: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 80, 
        backgroundColor: '#fff', 
        marginLeft: 0,
        marginRight: 0,
    },

    body: {
        backgroundColor: '#fff',
        flex: 1,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth:.5,
    },
    rowHeader: {
        backgroundColor: '#FFF5F5',
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
    },
    row: {
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10,
    }
})