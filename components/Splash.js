import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import localdb from '../localdb';

export default class Splash extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={{uri:'./assets/background.jpg'}}
          style={{ width: '100%', height: '100%', alignItems: 'center' }}>
          <Image
            source={require('../assets/astrohub_logo_transparent.png')}
            style={{
              width: 200,
              height: 200,
              resizeMode: 'contain',
              marginTop: '25%',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 35,
              marginTop: '5%',
              marginBottom: '8%',
            }}>
            AstroHub
          </Text>
          <ActivityIndicator size="large" color="white" />
        </ImageBackground>
      </View>
    );
  }
}
