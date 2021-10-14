import { StyleSheet } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.secularOne_400,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 50
  },
  logo: {
    width: 145,
    height: 145
  },
  button: {
    width: 320,
    height: 55,
    backgroundColor: colors.blue_oil,
    borderRadius: 18,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    fontFamily: fonts.poppins_400,
    color: colors.white
  }
})