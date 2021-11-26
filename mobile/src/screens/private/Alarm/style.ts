import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
    justifyContent: 'space-between'
  },
  backgroundModal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerModal: {
    width: 310,
    height: 350,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  headerModal: {
    width: '100%',
    height: '12.5%',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerModal: {
    width: '100%',
    height: '12.5%',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textModal: {
    fontSize: 16,
    fontFamily: fonts.poppins_500,
    color: colors.white,
  },
  textHorary: {
    fontSize: 22,
    fontFamily: fonts.roboto_400,
    color: colors.black
  },
  titleModal: {
    fontSize: 14,
    fontFamily: fonts.poppins_400,
    color: colors.black,
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
  buttonAlarm: {
    width: 100,
    height: 55,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});