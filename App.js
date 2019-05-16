/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Modal, TouchableHighlight, Alert, Platform, Button, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.instructions}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class Header extends Component {
  handleClick() {
    this.props.navigation.toggleDrawer();
    //this.props.onDelete(this.props.name);
  }

  render() {
    return (
      <View style={styles.header} onPress={() => this.handleClick()}>
        <Text style={styles.headerText} >{this.props.name}!</Text>
      </View>
    );
  }
}


class SecondScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Second',
    title: 'Second',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}


class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header name="Just Text really?" />        
        <ModalExample />
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Go to Second"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: SecondScreen
  }  
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return <AppContainer style={backgroundColor='blue'} />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#000',
    flexDirection: 'column',
    alignContent: 'stretch',
    justifyContent: 'center',
  },
  header : {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'stretch',
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#FFF',
    color: '#000',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
});
