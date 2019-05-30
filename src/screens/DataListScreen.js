import React, {Component} from 'react';
import {Modal, TouchableHighlight, Text, Easing, Animated, View} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Header from '../components/Header';
import Button from '../components/Button';
import DataList from '../components/DataList';
import HamburgerIcon from '../components/HamburgerIcon';
import styles from '../styles';
import { createStackNavigator } from 'react-navigation';

class DataListScreen extends Component {
    render() {
      var dataList = [ 
        {id: "1", title: "Hello"},
        {id: "2", title: "Hello 2"}
      ]
      return (
        <DataList dataList={dataList} />
      );
    }
}

export default DataListScreen_StackNavigator = createStackNavigator({
    Main: {
      screen: DataListScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Data List Screen',
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


