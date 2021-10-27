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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  day: {

  },
  footerCalendar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  query: {},
  icon: {
    color: colors.dark_gray,
  },
  textIcon: {
    fontSize: 16,
    fontFamily: fonts.roboto_400,
    color: colors.white,
    marginLeft: 10
  },
  text: {},
  title: {
    fontSize: 25,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center'
  }
});