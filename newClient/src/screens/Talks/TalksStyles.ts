import globals from '../../globals';
const { StyleSheet } = globals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globals.colorOverlayMain,
    flex: 1,
  },
  flatlistContainer: {
    paddingBottom: 15,
  },
  heading: {
    fontFamily: globals.defaultFontFamilyHeading,
    color: globals.colorTextLight,
    fontSize: globals.defaultFontSizeHeading,
    marginBottom: 15,
  },
  list: {
    paddingVertical: 20,
    paddingRight: globals.talkShadowX + 1,
  },
});

export default styles;
