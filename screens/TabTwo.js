import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, CheckBox, Card} from 'react-native-elements';

const TabIcon = (props) => (
  <Ionicons
    name={props.focused ? 'ios-create' : 'ios-create-outline'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

export class TabTwo extends Component {
  state = {
    selectedLang1: false,
    selectedLang2: false,
    selectedLang3: false,
    selectedLang4: false,
  };

  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    const {
      selectedLang1,
      selectedLang2,
      selectedLang3,
      selectedLang4,
    } = this.state;
    return (
      <View style={styles.starter}>
        <Header
          centerComponent={{
            text: 'Tab Two CheckBox',
            style: {color: '#fff'},
          }}
        />
        <Card>
          <View style={styles.container}>
            <Text style={styles.header}>
              What's your favorite programming language?
            </Text>
            <View style={styles.item}>
              <CheckBox
                checked={selectedLang1}
                color="#fc5185"
                onPress={() => this.setState({selectedLang1: !selectedLang1})}
              />
              <Text
                style={{
                  ...styles.checkBoxTxt,
                  color: this.state.selectedLang1 ? '#fc5185' : 'gray',
                  fontWeight: this.state.selectedLang1 ? 'bold' : 'normal',
                  marginTop: 15,
                }}>
                Python
              </Text>
            </View>
            <View style={styles.item}>
              <CheckBox
                checked={this.state.selectedLang2}
                color="#fc5185"
                onPress={() => this.setState({selectedLang2: !selectedLang2})}
              />
              <Text
                style={{
                  ...styles.checkBoxTxt,
                  color: this.state.selectedLang2 ? '#fc5185' : 'gray',
                  fontWeight: this.state.selectedLang2 ? 'bold' : 'normal',
                  marginTop: 15,
                }}>
                Javascript
              </Text>
            </View>
            <View style={styles.item}>
              <CheckBox
                checked={this.state.selectedLang3}
                color="#fc5185"
                onPress={() => this.setState({selectedLang3: !selectedLang3})}
              />
              <Text
                style={{
                  ...styles.checkBoxTxt,
                  color: this.state.selectedLang3 ? '#fc5185' : 'gray',
                  fontWeight: this.state.selectedLang3 ? 'bold' : 'normal',
                  marginTop: 15,
                }}>
                Php
              </Text>
            </View>
            <View style={styles.item}>
              <CheckBox
                checked={this.state.selectedLang4}
                color="#fc5185"
                onPress={() => this.setState({selectedLang4: !selectedLang4})}
              />
              <Text
                style={{
                  ...styles.checkBoxTxt,
                  color: this.state.selectedLang4 ? '#fc5185' : 'gray',
                  fontWeight: this.state.selectedLang4 ? 'bold' : 'normal',
                  marginTop: 15,
                }}>
                C#
              </Text>
            </View>
            <TouchableOpacity style={styles.submit}>
              <Text style={{color: 'white'}}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#364f6b',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  item: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    //padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  checkBoxTxt: {
    marginLeft: 20,
  },
  submit: {
    width: '80%',
    backgroundColor: '#fc5185',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  starter: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TabTwo;
