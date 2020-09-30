import globals from '../../globals';

const styles = globals.StyleSheet.create({
  header: {
    flex: 0,
    backgroundColor: globals.colorOverlayHeader,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: globals.colorOverlayGeneral,
  },
  loadingView: {
    backgroundColor: globals.colorBgMedium,
    flex: 1,
  },
});

export default styles;
