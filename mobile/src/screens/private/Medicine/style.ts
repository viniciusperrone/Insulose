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
    alignSelf: 'center',
    marginTop: 30
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
  header: {
    width: '100%',
    height: '12.5%',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textModal: {
    fontSize: 16,
    fontFamily: fonts.poppins_500,
    color: colors.white,
  },
  titleModal: {
    fontSize: 14,
    fontFamily: fonts.poppins_400,
    color: colors.black,
  },
  content: {
    flex: 1
  },
  containerInput: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row'
  },
  input: {
    width: 190,
    height: '80%',
    borderBottomWidth: 1,
    borderBottomColor: colors.dark_gray,
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 13,
    fontFamily: fonts.poppins_400,
    color: colors.dark_gray,
  },
  footer: {
    width: '100%',
    height: '12.5%',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  }

});