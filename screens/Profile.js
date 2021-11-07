import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Switch,
} from 'react-native';
import firebase from 'firebase';
let lightThemeEnabled = false;
export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      isNameEnabled: false,
      darkThemeEnabled: false,
    };
  }
  async _initTheme() {
    let theme, name, image;
    await firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({
      darkThemeEnabled: theme === 'light' ? true : false,
    });
  }
  async _initName() {
    let theme, name, image;
    await firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (snapshot) {
        theme = snapshot.val().show_name;
      });
    this.setState({
      darkThemeEnabled: theme === 'yes' ? true : false,
    });
  }
  toggleSwitch = (val) => {
    this.setState({ isEnabled: !this.state.isEnabled });
    let theme = this.state.darkThemeEnabled ? 'light' : 'dark';
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid + '/current_theme')
      .set(theme);
    this.setState({
      darkThemeEnabled: this.state.isEnabled,
    });
    lightThemeEnabled = !this.state.darkThemeEnabled;
    //console.log(val);
  };
  toggleNameSwitch = (val) => {
    this.setState({ isEnabled: !this.state.isEnabled });
    let theme = this.state.darkThemeEnabled ? 'light' : 'dark';
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid + '/show_name')
      .set(theme);
    this.setState({
      isNameEnabled: this.state.isEnabled,
    });
    //console.log(val);
  };
  componentDidMount() {
    //console.log(firebase.auth().currentUser.photoURL);
  }
  setNameShown = (data) => {
    console.log(data);
  };
  render() {
    let photoUrl = firebase.auth().currentUser.photoURL;
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Arial', fontSize: 25, marginBottom: '8%' }}>
          Your Profile
        </Text>
        <Image
          source={{ uri: photoUrl }}
          style={{ width: 200, height: 200, borderRadius: 20 }}
        />
        <Text style={{ fontFamily: 'Arial', fontSize: 30, marginBottom: '5%' }}>
          {firebase.auth().currentUser.displayName}
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(val) => {
              this.toggleNameSwitch();
            }}
            value={this.state.isNameEnabled}
          />
          <Text style={{ fontFamily: 'Arial', fontSize: 18 }}>
            Show my name publically
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(val) => {
              this.toggleSwitch();
            }}
            value={this.state.darkThemeEnabled}
          />
          <Text style={{ fontFamily: 'Arial', fontSize: 18 }}>Dark Theme</Text>
        </View>
      </View>
    );
  }
}
