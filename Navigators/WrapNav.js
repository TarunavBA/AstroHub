import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../components/Splash';
import Drawer from './Drawer';
import Screens from '../screens/index';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="loading"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Screens.Loading} name="loading" />
      <Stack.Screen component={Screens.Signin} name="signin" />
      <Stack.Screen component={Splash} name="splash" />
      <Stack.Screen component={Drawer} name="app" />
      <Stack.Screen component={Screens.Dashboard} name="dashboard" />
    </Stack.Navigator>
  );
};

export default { StackNavigator: StackNavigator };
