import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import config from '../config';
import * as Google from 'expo-google-app-auth';
import localdb from '../localdb';

export default class ProfileScreen extends Component {
  onSignIn = async (googleUser) => {
    try {
      console.log('[Firebase]: Fetching User...');
      var credential = await config.getCred(
        googleUser.idToken,
        googleUser.accessToken
      );
      let result = await firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          var errorMessage = error.message;
          console.log(
            '[Firebase]: Error fetching and signing in: ' + errorMessage
          );
          // ...
        });
      //console.log(result);
      if (result.additionalUserInfo.isNewUser) {
        console.log('[Firebase]: New User, Adding details to database...');
        firebase
          .database()
          .ref('users/' + result.user.uid)
          .set({
            gmail: result.user.email,
            profile_picture: firebase.auth().currentUser.photoURL,
            name: firebase.auth().currentUser.displayName,
            current_theme: 'dark',
            show_name: 'no',
          })
          .then(function (snapshot) {
            console.log('[Firebase]: Save successful!');
          });
      }
    } catch (err) {
      console.log('[Firebase]: Account Error: ' + err.message);
    }
  };
  signInWithGoogleAsync = async () => {
    try {
      console.log('[Firebase]: Trying to sign in...');
      const result = await Google.logInAsync({
        androidClientId:
          '1072174932849-adaffe3lps85b6mc70s70lg3nvrm5nao.apps.googleusercontent.com',
        iosClientId:
          '1072174932849-gh3dr47qdi8dsb5oj46llbiv5jer2i87.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        this.onSignIn(result);
        //console.log(result.accessToken);
        this.props.navigation.navigate('app');
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('[Firebase]: Error while signing in: ' + e.message);
      return { error: true };
    }
  };
  render() {
    return (
      <View>
        <View>
          <ImageBackground
            source={localdb.bgImage}
            style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <Image
              source={require('../assets/AstroHubLogo_transparent.png')}
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
            <TouchableOpacity
              onPress={() => {
                this.signInWithGoogleAsync();
              }}
              style={{
                flexDirection: 'row',
                backgroundColor: '#4f4f4faf',
                borderRadius: 10,
                alignSelf: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={localdb.googleIcon}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginRight: 10,
                    margin: 5,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Arial',
                    fontSize: 25,
                    color: 'white',
                    margin: 5,
                  }}>
                  Sign in with Google
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
