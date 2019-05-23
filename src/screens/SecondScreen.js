import React, {Component} from 'react';
import {Modal, TouchableHighlight, Text, Easing, Animated, View} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import HamburgerIcon from '../components/HamburgerIcon';
import styles from '../styles';
import { createStackNavigator } from 'react-navigation';

class SecondScreen extends Component {
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



export default SecondScreen_StackNavigator = createStackNavigator({
    Main: {
      screen: SecondScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Second Screen',
        headerLeft: <HamburgerIcon navigationProps={navigation} />,
        headerStyle: { 
            backgroundColor: '#000000',
            color: 'white',
            borderBottomWidth: 0
        }, 
        headerTintColor: 'transparent'
        // headerStyle: {
        //   backgroundColor: '#FF9800'
        // },
        // headerTintColor: '#fff',
      })
    }
  }, {
  transitionConfig: () => ({
      transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
      },
  })
});