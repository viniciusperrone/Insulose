import { StyleSheet, Platform, StatusBar } from 'react-native';

import { fonts } from '../../style/fonts';
import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    position: 'absolute',
    left: 0,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: colors.blue_oil,
    borderTopRightRadius: 20,
  },
  content: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.poppins_400,
    color: '#403C87'
  },
  description: {
    fontSize: 18,
    fontFamily: fonts.poppins_500,
    color: colors.white
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: '#C4C4C4',
  },
  footer: {
    width: '100%',
    height: '20%',
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }

});