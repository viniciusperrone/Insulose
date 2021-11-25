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
  content: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: '12.5%',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: 'row'
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
  buttonRegister: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardSnack: {
    width: 334,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 10
  },
  textSnack: {
    fontSize: 18,
    fontFamily: fonts.poppins_500,
    color: colors.black
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
});