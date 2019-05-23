import React, {Component} from 'react';
import {Modal, TouchableHighlight, Platform, YellowBox, Button, StyleSheet, Text, View} from 'react-native';
import ModalExample from './ModalExample';
import Header from '../components/Header';
import HamburgerIcon from '../components/HamburgerIcon';
import styles from '../styles';
import { createStackNavigator } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
}

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




const HomeScreen_StackNavigator = createStackNavigator({
    Main: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Main Screen'        
      })
    }
  }, { headerMode: 'none'});

  export default HomeScreen_StackNavigator;