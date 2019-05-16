import React, {Component} from 'react';
import {Modal, TouchableHighlight, Button, StyleSheet, Text, View} from 'react-native';

export default class SecondScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Second',
      title: 'Second',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#000',
    flexDirection: 'column',
    alignContent: 'stretch',
    justifyContent: 'center',
},
header : {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'stretch',
    backgroundColor: '#000',
    flexDirection: 'row',
},
headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#FFF',
    color: '#000',
},
instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
},
});
  