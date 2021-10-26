import { StyleSheet } from 'react-native';

import { colors } from '../../style/colors';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    color: colors.black
  }
})