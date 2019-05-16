import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
    render() {
      return (
        <View style={ styles.headerContainer }>
            <Text style={styles.tempText}>{this.props.name}!</Text>
        </View>
      );
    }
  }



const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
});
  