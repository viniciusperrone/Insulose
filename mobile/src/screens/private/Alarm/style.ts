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
    alignSelf: 'center'
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
});