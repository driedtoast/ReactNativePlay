import React, {Component}  from 'react';
import { TouchableHighlight, Text, StyleSheet} from 'react-native';
export default class Header extends Component {
    render() {
      return (
    <TouchableHighlight style={buttonStyles.container} onPress={this.props.onPress}>
        <Text style={buttonStyles.button}>{this.props.title}</Text>
    </TouchableHighlight>
    );
    }
}

const buttonStyles = StyleSheet.create({
    container: {
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#111',
      color: '#fff',
      borderRadius: 5,
      padding: 15,
    },
  });