import React, {Component} from 'react';
import {Modal, TouchableHighlight, Text, View} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import styles from './styles';

export default class SecondScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Second',
      title: 'Second',
    };
  
    render() {
      return (
      <View style={ [styles.mainContainer, { backgroundColor: '#000000' }] }>
          <Header name="Second Screen" />        
            <View style={ styles.bodyContainer }>         
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
            </View>
      </View>      
      );
    }
  }
