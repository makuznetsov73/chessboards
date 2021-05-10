import React, { Component } from "react";
import { View, Text, Button, BackHandler, StyleSheet, TextInput } from "react-native";

export default class MenuScreen extends Component {
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
        this.props.history.push("/games")
    }

    logPutButtonPress() {
        this.props.history.push("/")
    }

    addGameButtonPress() {
        this.props.history.push("/addgame")
    }

    render() {
        return (
            <View style={styles}>
                <View>
                    <Text style={styles.appName}>Chessboards</Text>
                </View>
                <Button style={styles.button} title="Play" onPress={() => {this.playButtonPress()}}/>
                <Button title="Add game mode" onPress={() => {this.addGameButtonPress()}}/>
                <Button title="Log out" onPress={() => {this.logPutButtonPress()}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    button: {
        borderWidth: 10,
        borderColor: '#fff'
    },
    appName: {
        textAlign: 'center',
        fontSize: 30,
        color: '#2196F3',
        lineHeight: 60,
    },
  });