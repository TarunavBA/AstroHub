import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import axios from 'axios';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: '',
      screenHeight: '',
      imageURL:''
    };
  }
  componentDidMount() {
    setInterval(this.updateScreenCoords, 1);
  }
  updateScreenCoords = () => {
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
    });
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={'https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=bAJiGVQjcc7zfp0WthmVLD5gYLyBcX8IADei5LcM'}
          style={styles.image}>
          <ActivityIndicator
            size="large"
            color="#ffffdd"
            style={styles.spinner}
          />
          <Text style={styles.loadingtext}>loading</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loadingtext: {
    alignSelf: 'center',
    color: '#ffffcd',
    fontSize: 15,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  spinner: {
    alignSelf: 'center',
    marginTop: height/2,
  },
});
