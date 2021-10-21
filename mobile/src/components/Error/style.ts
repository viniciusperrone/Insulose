import { StyleSheet } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container:{
    width: '80%',
    height: 100,
    backgroundColor: colors.white,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    marginLeft: 15
  },
  content: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 20,
    fontFamily: fonts.poppins_700,
    color: colors.black
  },
  textContent: {
    fontSize: 18,
    fontFamily: fonts.poppins_500,
    color: colors.red_pure
  }
})