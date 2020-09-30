import globals from '../../globals';
import { StyleSheet } from 'react-native';
import { Center } from '../Center/Center';
const styles = StyleSheet.create({
  button: {
    backgroundColor: globals.colorBgMedium,
    borderRadius: 4,
    flexGrow: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    shadowColor: globals.colorBGDark,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  buttonText: {
    color: globals.colorTextLight,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: globals.baseFontSize * 0.8,
    fontFamily: globals.defaultFontFamilyHeading,
  },
  outer: {
    minWidth: '50%',
  },
});

export default styles;
