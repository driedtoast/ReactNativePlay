import React, {Component} from 'react';
import {Modal, TouchableHighlight, Platform, Button, StyleSheet, Text, View} from 'react-native';
import ModalExample from './ModalExample';
import Header from '../components/Header';
import styles from './styles';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  


export default class HomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      title: 'Home',
    };
  
    render() {
      return (
        <View style={ [styles.mainContainer, { backgroundColor: '#000000' }] }>
          <Header name="Just Text really?" />        
            <View style={ styles.bodyContainer }>
            
            <Text style={ styles.subtitle }>{instructions}</Text>
            <Button
                title="Go to Second"
                onPress={() => this.props.navigation.navigate('Second')}
            />
            </View>
      </View>      
      );
    }
  }