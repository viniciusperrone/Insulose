import { StyleSheet } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
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