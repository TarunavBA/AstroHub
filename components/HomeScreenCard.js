import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'black',
          width: '90%',
          alignSelf: 'center',
          margin: 20,
        }}>
        <ImageBackground
          source={this.props.image}
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ margin: 20, color: 'white', fontSize: 30 }}>
            {this.props.title}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff92',
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              height: '45%',
              marginLeft: '50%',
            }}
            onPress={() => {
              this.props.navigation.navigate(this.props.screenToNav);
            }}>
            <Text style={{ color: 'white', margin: 5, fontSize: 20 }}>
              explore
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
