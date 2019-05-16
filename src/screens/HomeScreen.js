import React, {Component} from 'react';
import {Modal, TouchableHighlight, Platform, Button, StyleSheet, Text, View} from 'react-native';
import ModalExample from './ModalExample';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  

class Header extends Component {
    handleClick() {
      this.props.navigation.toggleDrawer();
      //this.props.onDelete(this.props.name);
    }
  
    render() {
      return (
        <View style={styles.header} onPress={() => this.handleClick()}>
          <Text style={styles.headerText} >{this.props.name}!</Text>
        </View>
      );
    }
  }

export default class HomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      title: 'Home',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Header name="Just Text really?" />        
          <ModalExample />
          <Text style={styles.instructions}>{instructions}</Text>
          <Button
            title="Go to Second"
            onPress={() => this.props.navigation.navigate('Second')}
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
  