import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, BackHandler, SectionList, TouchableOpacity, Alert } from 'react-native';
import { GamePreview } from './../data/gamePreview';

class GameScreen extends Component {
    state = {  }

    gamePreview;

    constructor(props) {
        super(props)
        this.gamePreview = new GamePreview("Chess", "Regular chess", "", "5");
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

    playButtonPress() {
        this.props.history.push("/games/game/game")
    }

    leaderBoardButtonPress() {
        this.props.history.push("/games/game/leaderboard")
    }

    render() { 
        return ( 
            <View>
                <Text style={styles.gameName}>{this.gamePreview.game}</Text>
                <Text style={styles.gameDescription}>{this.gamePreview.description}</Text>
                <Button style={styles.button} title="Play" onPress={() => {this.playButtonPress()}}/>
                <Button style={styles.button} title="Leaderboard" onPress={() => {this.leaderBoardButtonPress()}}/>
            </View> 
        );
    }
}
 
export default GameScreen;

const styles = StyleSheet.create({
    gameName: {
        fontSize: 22,
        lineHeight: 50,
    },
    gameDescription: {
        fontSize: 18,
        lineHeight: 30,
    },
    button: {
        width: 30
    }
});