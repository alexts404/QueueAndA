import { StyleSheet } from 'react-native';
import globals from '../../globals';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: globals.baseFontSize,
    textTransform: 'capitalize',
    fontFamily: globals.defaultFontFamilyHeading,
    color: globals.colorTextDark,
    textAlign: 'center',
  },
});

export default styles;
