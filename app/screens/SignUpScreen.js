import React, { Component } from "react";
import { View, Text, Button, BackHandler, TextInput, StyleSheet } from "react-native";

export default class SignUpScreen extends Component {
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

  signUpButtonPress() {
    this.props.history.push("/menu")
  }

  render() {
    return (
      <View style={styles}>
        <View>
          <Text style={styles.appName}>Chessboards</Text>
        </View>
        <Text style={styles.signUp}>Sign up</Text>
        <View>
          <TextInput type="text" placeholder="username"/> 
        </View>
        <View>
          <TextInput type="text" secureTextEntry={true} placeholder="password"/> 
        </View>
        <View>
          <TextInput type="text" secureTextEntry={true} placeholder="confirm password"/> 
        </View>
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
  signUp: {
    textAlign: 'center',
    fontSize: 20,
  },
  appName: {
    textAlign: 'center',
    fontSize: 30,
    color: '#2196F3',
    lineHeight: 60,
  }
});
