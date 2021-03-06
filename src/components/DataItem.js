import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

import { Icon } from 'react-native-elements';

export default class DataItem extends Component {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const containerStyle = this.props.selected ? styles.rowContainerSelected : styles.rowContainer;

        return(
          <View style={containerStyle} onPress={this._onPress}>
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
              </Text>
            </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      height: 100,
      padding: 10,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 4,
      shadowOffset:{  width: 1,  height: 1,  },
      shadowColor: '#CCC',
      shadowOpacity: 1.0,
      shadowRadius: 1
    },
    rowContainerSelected: {
        flexDirection: 'row',
        backgroundColor: '#c0c0c0',
        height: 100,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
      },
    title: {
      paddingLeft: 10,
      paddingTop: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#777'
    },
    rowText: {
        flex: 4,
        flexDirection: 'column'
    }
}
);