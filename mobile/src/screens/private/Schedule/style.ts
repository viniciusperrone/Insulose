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
  contentCalendar: {
    minWidth: '100%',
    height: 150,
  },
  day: {
    width: 68,
    height: 120,
    borderRadius: 43,
    backgroundColor: '#680279',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 15

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