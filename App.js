import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MoonMap from './components/MoonMap'

export default function App() {
  return (
    <View style={styles.container}>
      <MoonMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
