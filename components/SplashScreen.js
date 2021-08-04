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

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: '',
      screenHeight: '',
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
          source={require('../assets/background.jpg')}
          style={styles.image}>
          <Image
            source={require('../assets/AstroHubLogo.png')}
            style={styles.splashIcon}
          />
          <Text style={styles.titletext}>AstroHub</Text>
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
  titletext: {
    alignSelf: 'center',
    color: '#ffffcd',
    fontSize: 30,
  },
  loadingtext: {
    alignSelf: 'center',
    color: '#ffffcd',
    fontSize: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  splashIcon: {
    width: width,
    height: height/5,
    alignSelf: 'center',
    margin: 30,
    marginTop: height/20,
    resizeMode: 'contain',
  },
  spinner: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
