import React, {Component} from 'react';
import {TouchableOpacity, Platform, Image, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class HamburgerIcon extends Component {
 
    toggleDrawer = () => {
      console.log(this.props.navigationProps);
      this.props.navigationProps.toggleDrawer();
    }
   
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>   
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <Icon name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                color="#fff"
                size={25}
                />            
          </TouchableOpacity>
        </View>
      );

    }
  }