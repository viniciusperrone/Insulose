import { StyleSheet } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 18,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '85%',
    height: '98%',
    fontSize: 16,
    fontFamily: fonts.poppins_700,
    color: colors.gray,
  }
})