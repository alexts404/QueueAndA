import { StyleSheet } from 'react-native';
import globals from '../../globals';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.colorOverlayMain,
    maxHeight: '100%',
  },
  inner: {
    marginTop: '10%',
    flex: 2,
    paddingHorizontal: '10%',
    marginBottom: '10%',
    flexGrow: 1,
  },
  logoText: {
    paddingTop: 20,
    textAlign: 'center',
    color: globals.colorTextDark,
    fontSize: globals.defaultFontSizeLogo * 0.9,
    fontFamily: globals.defaultFontFamilyLogo,
    fontWeight: 'bold',
    textShadowOffset: {
      width: 3,
      height: 4,
    },
    textShadowColor: globals.colorBgMedium,
    textShadowRadius: 10,
    letterSpacing: (globals.defaultFontSizeLogo / 100) * -7,
    paddingHorizontal: 10,
  },
});

export default styles;
