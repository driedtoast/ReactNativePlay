import React, {Component} from 'react';
import {Modal, TouchableHighlight, Text, Easing, Animated, View} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Header from '../components/Header';
import Button from '../components/Button';
import HamburgerIcon from '../components/HamburgerIcon';
import styles from '../styles';
import { createStackNavigator } from 'react-navigation';

class CardScreen extends Component {
    render() {
      return (
        // <View style={ [styles.mainContainer, { backgroundColor: '#000000' }] }>
        <Card title='HELLO WORLD'>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
        </Card>
        // </View>      
      );
    }
}

export default CardScreen_StackNavigator = createStackNavigator({
    Main: {
      screen: CardScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Card Screen',
        headerLeft: <HamburgerIcon navigationProps={navigation} />,
        headerStyle: { 
            backgroundColor: '#000000',
            color: 'white',
            borderBottomWidth: 0
        }, 
        headerTintColor: 'transparent'
      })
    }
  });


