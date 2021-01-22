import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, CheckBox} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => (
  <Ionicons
    name={props.focused ? 'ios-thermometer' : 'ios-thermometer-outline'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

export class TabFour extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    return (
      <View>
        <Header centerComponent={{text: 'Tab Four', style: {color: '#fff'}}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabFour;
