import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Card from '../components/HomeScreenCard';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <Card
          title="Maps"
          image={{
            uri:
              'https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-2060x1288.jpg',
          }}
          navigation={this.props.navigation}
          screenToNav="Home"
        />
      </ScrollView>
    );
  }
}
