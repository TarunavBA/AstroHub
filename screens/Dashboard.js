import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={{
            uri:
              'https://raw.githubusercontent.com/somePythonProgrammer/AstroHub/main/assets/background.jpg',
          }}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>{'\n\nDASHBOARD'}</Text> 
        </ImageBackground>
      </View>
    );
  }
}
