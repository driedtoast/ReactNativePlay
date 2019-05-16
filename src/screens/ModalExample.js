import React, {Component} from 'react';
import {Modal, TouchableHighlight, Alert, Button, StyleSheet, Text, View} from 'react-native';

export default class ModalExample extends Component {
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
  