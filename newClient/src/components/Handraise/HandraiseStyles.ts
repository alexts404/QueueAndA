import { StyleSheet } from 'react-native';
import globals from '../../globals';
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    flexGrow: 10,
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  icon: {
    color: globals.colorTextLight,
    textAlign: 'center',
  },
  line: {
    flexDirection: 'row',
    //paddingLeft: 5,
  },
  loginInfo: {
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  positionView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: globals.baseFontSize * 3.5,
  },
  text: {
    fontSize: globals.baseFontSize * 1.2,
    fontFamily: globals.defaultFontFamilyHeading,
    color: globals.colorTextLight,
    textAlign: 'center',
  },
  textPosition: {
    fontSize: globals.baseFontSize * 2.5,
    paddingHorizontal: 2,
    minWidth: globals.baseFontSize * 3,
    textAlign: 'center',
  },
  positionRed: {
    color: globals.colorRed,
  },
  userName: {
    color: globals.colorTextDark,
    marginLeft: globals.baseFontSize * 0.2,
    textShadowColor: globals.colorBGDark,
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    paddingRight: 5,
  },
  padding: {
    paddingLeft: 5,
  },
});

export default styles;
