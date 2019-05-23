import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import CardScreen from '../screens/CardScreen';


type Props = {};

const AppNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen
    },
    Second: {
      screen: SecondScreen
    },
    Cards: {
      screen: CardScreen
    }  
  }, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  });
  
const AppContainer = createAppContainer(AppNavigator);
  
export default AppContainer;
  