import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    backgroundColor: colors.gray_light
  },
  button: {
    width: '100%', 
    height: 70,
    marginVertical: 10,
    justifyContent: 'space-evenly',
    paddingLeft: 10
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.poppins_400,
    color: colors.black,
    marginTop: 10,
    marginLeft: 15
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.poppins_400,
    color: colors.dark_gray,
    marginLeft: 15
  },
  titleModal: {
    fontSize: 20,
    fontFamily: fonts.poppins_600,
    color: colors.black
  }
  
});