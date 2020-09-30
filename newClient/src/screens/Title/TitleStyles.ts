import globals from '../../globals';

const styles = globals.StyleSheet.create({
  logo: {
    marginTop: '-10%',
    marginBottom: '5%',
  },
  text: {
    color: globals.colorTextDark,
    fontSize: globals.defaultFontSizeLogo,
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
  touchNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
