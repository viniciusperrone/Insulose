import { StyleSheet, Platform, StatusBar } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});