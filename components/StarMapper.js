import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import axios from 'axios';
import base64 from 'react-native-base64';
import { WebView } from 'react-native-webview';

const StarMapper = ({ navigation }) => {
  return (
    <View>
      <WebView source={{ uri: 'http://server1.sky-map.org/skywindow?object=M100&zoom=8&img_source=SDSSs' }} />
    </View>
  );
};

export default StarMapper;
