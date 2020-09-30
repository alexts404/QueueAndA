import globals from '../../globals';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  card: {
    backgroundColor: globals.colorTextDark,
    marginBottom: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    shadowRadius: 1,
    shadowOffset: {
      width: globals.talkShadowX,
      height: globals.talkShadowY,
    },
    shadowColor: globals.colorTextDark,
    shadowOpacity: 0.25,
    minHeight: 'auto',
  },
  conference: {
    fontFamily: globals.defaultFontFamilyHeading,
    fontSize: globals.baseFontSize,
  },
  session: {},
  text: {
    fontFamily: globals.defaultFontFamilyBody,
    textTransform: 'capitalize',
    lineHeight: 25,
    color: globals.colorBGDark,
    //color: globals.colorTextLight,
    // textShadowColor: globals.colorBgMedium,
    // textShadowRadius: 1,
  },
  time: {},
});

export default styles;
