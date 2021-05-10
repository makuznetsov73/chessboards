import React, { Component } from 'react';
import { View, BackHandler, Text, StyleSheet } from 'react-native';
import {Provider, useDispatch} from "react-redux";
import {store} from "../store";
import ChessBoard from "./../chessboard/ChessBoard";

export default class GameBoardScreen extends Component {
    state = {  }

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
        return (
          <View>
            <Text style={styles.playerName}>Player dummy</Text>
            <Text style={styles.playerRating}>Chess rating 1340</Text>
            <Provider store={store}>
                <ChessBoard/>
            </Provider>
          </View>
        );
    }
}

const styles = StyleSheet.create({

  playerName: {
    fontSize: 22,
    lineHeight: 50,
  },
  playerRating: {
    fontSize: 18,
    lineHeight: 30,
  }

});