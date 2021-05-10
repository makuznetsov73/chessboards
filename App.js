import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch as SwitchN, Route as RouteN } from "react-router-native";
import { BrowserRouter, Switch as SwitchW, Route as RouteW } from "react-router-dom";

import ChooseGameScreen from "./app/screens/ChooseGameScreen";
import Home from "./app/screens/SignUpScreen";
import MenuScreen from "./app/screens/MenuScreen";
import Products from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AddGameScreen from "./app/screens/AddGameScreen";
import GameScreen from "./app/screens/GameScreen";
import GameLeaderBoardScreen from "./app/screens/GameLeaderBoardScreen";
import GameBoardScreen from "./app/screens/GameBoardScreen";

export default class App extends React.Component {

  render() {
    if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
      console.log("Mobile")
      return (
        <NativeRouter>
          <View style={styles.container}>
            <SwitchN>
            <RouteW exact path="/" component={LoginScreen} />
              <RouteN exact path="/signup" component={SignUpScreen} />
              <RouteN exact path="/menu" component={MenuScreen} />
              <RouteN exact path="/games" component={ChooseGameScreen} />
              <RouteN exact path="/games/game" component={GameScreen} />
              <RouteN exact path="/games/game/leaderboard" component={GameLeaderBoardScreen} />
              <RouteN exact path="/games/game/game" component={GameBoardScreen} />
              <RouteN exact path="/addgame" component={AddGameScreen} />
            </SwitchN>
          </View>
        </NativeRouter>
      )
    }
    else if (typeof document != 'undefined') {
      console.log("Web")
      return (
        <BrowserRouter>
          <View style={styles.container}>
            <SwitchW>
              <RouteW exact path="/" component={LoginScreen} />
              <RouteW exact path="/signup" component={SignUpScreen} />
              <RouteW exact path="/menu" component={MenuScreen} />
              <RouteW exact path="/games" component={ChooseGameScreen} />
              <RouteW exact path="/games/game" component={GameScreen} />
              <RouteW exact path="/games/game/leaderboard" component={GameLeaderBoardScreen} />
              <RouteW exact path="/games/game/game" component={GameBoardScreen} />
              <RouteW exact path="/addgame" component={AddGameScreen} />
            </SwitchW>
          </View>
        </BrowserRouter>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  }
});
