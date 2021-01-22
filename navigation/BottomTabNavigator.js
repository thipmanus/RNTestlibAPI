import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabOne from '../screens/TabOne';
import TabTwo from '../screens/TabTwo';
import TabThree from '../screens/TabThree';
import TabFour from '../screens/TabFour';

const BottomTabNavigator = createBottomTabNavigator(
  {
    One: TabOne,
    Two: TabTwo,
    Three: TabThree,
    Four: TabFour,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

export default BottomTabNavigator;
