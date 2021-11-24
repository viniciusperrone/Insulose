import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center',
    marginVertical: 40 
  },
  plusButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 4,
    borderColor: colors.black,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center'
},
});