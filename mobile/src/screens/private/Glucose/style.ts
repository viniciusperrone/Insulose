import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.roboto_400,
    color: colors.white,
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center',
    marginTop: 30
  },
  textRegister: {
    fontSize: 25,
    fontFamily: fonts.poppins_500,
    color: colors.white,
    alignSelf: 'center',
  },
  plusButton: {
      width: 65,
      height: 65,
      borderRadius: 32.5,
      borderWidth: 4,
      borderColor: colors.black,
      alignSelf: 'flex-end',
      marginRight: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
  titleDate: {
    fontSize: 18,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center',
  },
  textDate: {
    fontSize: 18,
    fontFamily: fonts.poppins_500,
    color: colors.white,
    alignSelf: 'center',
  },
  textContent: {
    fontSize: 15,
    fontFamily: fonts.poppins_500,
    color: colors.white,
    alignSelf: 'center',
  },
  textFunny: {
    fontSize: 15,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center',
  },
  textComment: {
    fontSize: 12,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginLeft: 50
  },
  containerComment: {
      width: '100%',
      height: 70,
  },
  input: {
      width: 218,
      height: 80,
      backgroundColor: colors.white,
      borderRadius: 10,
      fontSize: 30,
      fontFamily: fonts.poppins_500,
      color: colors.black,
      textAlign: 'center',
      alignSelf: 'center'
  },
  inputComment: {
    width: 320,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    fontSize: 13,
    fontFamily: fonts.roboto_400,
    color: colors.black,
    alignSelf: 'center'
  },
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  button: {
    width: 106,
    height: 42,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 15,
    fontFamily: fonts.poppins_700,
    color: colors.black,
  }
});