import { StyleSheet } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginTop: 17,
    marginLeft: 20
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginTop: 5
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.poppins_500,
    alignSelf: 'center'
  },
  form: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  checkBox: {
    widht: 24,
    height: 24,
    borderRadius: 5,
    alignSelf: 'center',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 150,
    height: 44,
    borderRadius: 18,
    backgroundColor: colors.white,
    fontSize: 16,
    fontFamily: fonts.poppins_700,
    color: 'black',
    alignSelf: 'center',
    marginTop: 5
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})