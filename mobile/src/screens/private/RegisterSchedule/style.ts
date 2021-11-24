import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center'
  },
  text: {
      fontSize: 18,
      fontFamily: fonts.poppins_400,
      color: colors.white

  },
  calendar: {
      width: 326,
      height: 260,
      borderRadius: 10,
      backgroundColor: colors.white,
      marginTop: 10,
      alignSelf: 'center'
  },
  containerRegister: {
      paddingHorizontal: 10
  },
  input: {
      height: 33,
      backgroundColor: colors.white,
      color: colors.dark_gray,
      borderRadius: 10,
      paddingLeft: 8
  },
  button: {
      width: 192,
      height: 40,
      borderRadius: 18,
      backgroundColor: colors.blue_oil,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textButton: {
      fontSize: 18,
      fontFamily: fonts.poppins_700,
      color: colors.white
  },
  content: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 30,
      justifyContent: 'center'
  },
  footer: {
      flex: 1,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center'
  }

});