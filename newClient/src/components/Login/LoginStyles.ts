import { StyleSheet } from 'react-native';
import globals from '../../globals';
const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: globals.colorModal,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: 'space-between',
    zIndex: 20,
  },
  button: {
    flexGrow: 1,
    //width: '100%',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  usernameContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: -5,
  },
  text: {
    color: globals.colorBGDark,
    fontFamily: globals.defaultFontFamilyHeading,
    fontSize: globals.baseFontSize,
    marginBottom: 5,
  },
  input: {
    height: globals.baseFontSize * 2,
    backgroundColor: globals.colorOverlayMain,
    borderRadius: 4,
    paddingHorizontal: 10,
    color: globals.colorBGDark,
    fontFamily: globals.defaultFontFamilyBody,
    fontSize: globals.baseFontSize,
  },
  outer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 110,
    backgroundColor: 'red',
  },
  overlay: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 20,
    top: 0,
    backgroundColor: globals.colorOverlayModal,
  },
});

export default styles;
