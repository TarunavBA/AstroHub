import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class DashboardScreen extends Component {
  componentDidMount() {
    this.props.navigation.navigate('app');
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={{
            uri:
              './assets/background.jpg',
          }}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>{'\n\n'}</Text>
        </ImageBackground>
      </View>
    );
  }
}
