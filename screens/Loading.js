import React, { Component } from 'react';
import firebaseapp from '../config';
import firebase from 'firebase';
import Splash from '../components/Splash';
import localdb from '../localdb';

export default class Loading extends Component {
  async componentDidMount() {
    localdb.bgImage = {
      uri:
        './assets/background.jpg',
    };
    localdb.googleIcon = await require('../assets/google-icon.png');
    if (firebase.auth().currentUser === null) {
      console.log('[Firebase]: Checking Sign-In...');
      this.checkLogin();
    } else if (!firebase.auth().currentUser === null) {
      console.log('[Firebase]: User already Signed-In!');
      this.props.navigation.navigate('dashboard');
    }
  }
  checkLogin() {
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log('[Firebase]: Checking Sign-In...');
      if (user) {
        console.log('[Firebase]: User is Signed in!');
        this.props.navigation.navigate('dashboard');
      } else {
        console.log('[Firebase]: User is not Signed-In!');
        this.props.navigation.navigate('signin');
      }
    });
  }
  render() {
    return <Splash />;
  }
}
