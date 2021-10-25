import { StyleSheet } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    color: colors.white,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.poppins_700,
    color: colors.white
  }
});