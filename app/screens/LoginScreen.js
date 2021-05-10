import React, { Component } from "react";
import { View, Text, Button, BackHandler, TextInput, StyleSheet } from "react-native";

export default class LoginScreen extends Component {
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

  loginButtonPress() {
    this.props.history.push("/menu")
  }

  signUpButtonPress() {
    this.props.history.push("/signup")
  }

  render () {
    return (
      <View styles={styles.container}>
        <View>
          <Text style={styles.appName}>Chessboards</Text>
        </View>
        <View className="mainscreen-1">
          <TextInput styles={styles.inputs} type="text" placeholder="username" className="mainscreen-text_input-2"/> 
        </View>
        <View className="mainscreen-2">
          <TextInput styles={styles.inputs} type="text" secureTextEntry={true} placeholder="password" className="mainscreen-text_input_2"/> 
        </View> 
        <Button title="Login" onPress={() => {this.loginButtonPress()}} />
        <Button title="Sign up" onPress={() => {this.signUpButtonPress()}} />
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
  appName: {
    textAlign: 'center',
    fontSize: 30,
    color: '#2196F3',
    lineHeight: 60,
  },
  inputs: {
    height: '35',
    padding: 15,
  }
});