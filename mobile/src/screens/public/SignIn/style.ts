import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginTop: 30,
    marginLeft: 30
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.poppins_500,
    marginTop: 10
  },
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})