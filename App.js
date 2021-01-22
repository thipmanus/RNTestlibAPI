import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <AppNavigator>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />
    </AppNavigator>
  );
}
