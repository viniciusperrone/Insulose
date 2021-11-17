import { StyleSheet } from 'react-native';

import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

export const style = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginLeft: 33
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fonts.poppins_400,
    color: colors.dark_gray,
    marginLeft: 33
  },
  titleCard: {
    fontSize: 18,
    fontFamily: fonts.poppins_700,
    color: colors.white,
    marginTop: 14,
    marginLeft: 14
  },
  card: {
    width: 170,
    height: 200,
    backgroundColor: '#DEBAE17A',
    borderRadius: 30,
    marginTop: 23,
    marginLeft: 23
    
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.poppins_500,
    color: colors.white,
  },
  button: {
    width: 330,
    height: 40,
    backgroundColor: colors.transparent_pink,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    marginRight: -120
  },
  iconCard: {
    color: colors.white,
    alignSelf: 'center',
    marginTop: 30
  },
  footer: {
    width: '100%',
    height: '18%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});