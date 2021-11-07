import React, { Component } from 'react';
import Screens from '../screens/index';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Image, StyleSheet } from 'react-native';
import StarMap from '../components/StarMapper';

const Drawer = createDrawerNavigator();

class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Image
          source={require('../assets/AstroHubLogo_transparent.png')}
          style={styles.sideMenuProfileIcon}></Image>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}

export default class DrawerNavigator extends Component {
  render() {
    //console.log('theme osvndiodn:' + lightThemeEnabled);
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerStatusBarAnimation="fade"
        gestureEnabled={true}
        swipeEnabled={true}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen name="Home" component={Screens.Home} />
        <Drawer.Screen name="Community" component={Screens.Community} />
        <Drawer.Screen name="Star Map" component={StarMap} />
        <Drawer.Screen name="Profile" component={Screens.Profile} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: RFValue(100),
    height: RFValue(100),
    borderRadius: RFValue(15),
    alignSelf: 'center',
    marginTop: RFValue(60),
    resizeMode: 'contain',
  },
});
