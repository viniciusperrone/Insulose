import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    width: '100%',
    height: 250,
    marginTop: 80
  },
  headerCalendar: {
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  day: {

  },
  query: {},
  icon: {

  },
  textIcon: {},
  text: {},
  title: {
    fontSize: 25,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center'
  }
});