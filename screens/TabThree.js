import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header, CheckBox} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const TabIcon = (props) => (
  <Ionicons
    name={props.focused ? 'ios-search' : 'ios-search-outline'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

export class TabThree extends Component {
  state = {
    persons: [],
  };

  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const persons = res.data;
      this.setState({persons});
    });
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{text: 'Tab Three Axios', style: {color: '#fff'}}}
        />
        <View style={{flex: 1, margin: 30}}>
          <View>
            {this.state.persons.map((person) => (
              <Text style={{fontSize: 25}}>
                {person.id}.{person.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

export default TabThree;
