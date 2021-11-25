console.log('[AstroHub]: Starting AstroHub...');

import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Navigators/WrapNav';
import Example from './components/StarMapper';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.StackNavigator />
      </NavigationContainer>
    );
  }
}
