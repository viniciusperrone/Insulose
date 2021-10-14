import { StyleSheet } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_oil,
    borderRadius: 18,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    fontFamily: fonts.poppins_500,
    color: colors.white
  }
})