import { StyleSheet } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    color: colors.white,
    marginLeft: 20
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 20
  }
})