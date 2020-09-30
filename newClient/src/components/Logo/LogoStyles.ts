import globals from '../../globals';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 64,
  },
  logo: {
    position: 'absolute',
    color: globals.colorBgMedium,
    transform: [
      {
        translateX: 5,
      },
      { translateY: 0 },
    ],
  },
  logoOutline: {
    position: 'absolute',
    color: globals.colorTextLight,
  },
});

export default styles;
