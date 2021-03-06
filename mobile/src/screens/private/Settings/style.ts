import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    backgroundColor: colors.gray_light
  },
  containerButton: {
    width: '100%',
    height: 130,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginBottom: 10
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    color: colors.blue_oil,
    marginRight: 15
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.poppins_400,
    color: colors.black,
    marginTop: 10,
    marginLeft: 15
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.poppins_400,
    color: colors.dark_gray,
    marginLeft: 15
  }
});