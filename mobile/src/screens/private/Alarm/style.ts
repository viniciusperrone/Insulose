import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
    justifyContent: 'space-between'
  },
  containerAlarm: {
    width: 315,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginVertical: 10
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  footerAlarm: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 30
  },
  day: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2.5
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.roboto_400,
    fontWeight: '900',
    color: colors.white,
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    alignSelf: 'center'
  },
  titleAlarm: {
    fontSize: 28,
    fontFamily: fonts.poppins_700,
    color: colors.black
  },
  textAlarm: {
    fontSize: 18,
    fontFamily: fonts.poppins_700,
    color: colors.dark_gray,
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