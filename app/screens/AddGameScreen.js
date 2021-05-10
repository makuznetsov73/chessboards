import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, BackHandler } from 'react-native';
import { GameObject } from '../data/gameObject';

class AddGameScreen extends Component {
    gameObject;

    state = {  }

    backAction = () => {
        this.props.history.goBack();
        return true;
      } 
    
      componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
        this.gameObject = new GameObject();
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
      }

    addGameButtonPress() {
        
    }

    render() { 
        return ( 
            <View style={styles}>
                <Text style={styles.pageHeader}>Add a game mode</Text>
                <Text style={styles.text}>Write new game mode rules and restrictions using special scripting language</Text>
                <TextInput style={styles.inputs} multiline numberOfLines={10} editable maxLength={500} onChangeText={text => this.gameObject.rules = text}></TextInput>
                <Text style={styles.text}>Game name</Text>
                <TextInput style={styles.inputs} onChangeText={text => this.gameObject.gameName = text}></TextInput>
                <Text style={styles.text}>Game short description</Text>
                <TextInput style={styles.inputs} onChangeText={text => this.gameObject.shortDescription = text}></TextInput>
                <Text style={styles.text}>Game description</Text>
                <TextInput style={styles.inputs} onChangeText={text => this.gameObject.description = text}></TextInput>
                <Button title="Add game" onPress={() => {this.addGameButtonPress()}}/>
            </View> 
        );
    }
}
 
export default AddGameScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    pageHeader: {
      textAlign: 'center',
      fontSize: 24,
      color: '#2196F3',
      lineHeight: 50,
    },
    inputs: {
      borderBottomWidth : 1.0,
      borderLeftWidth : 1.0,
      borderRightWidth : 1.0,
      borderTopWidth : 1.0,
    },
    text: {
      backgroundColor: '#fff',
      flex: 1,
      fontSize: 18,
      paddingHorizontal: 10,
    }
  });