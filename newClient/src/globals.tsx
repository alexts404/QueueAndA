// global styles and asset set up

import { Dimensions, StyleSheet } from 'react-native';

import {
  useFonts,
  Oswald_700Bold,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';

const useCustomFonts = () => {
  return useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
    Raleway_700Bold,
  });
};

const {
  width: SCREEN_WIDTH, //, height: SCREEN_HEIGHT
} = Dimensions.get('window');

let globals = {
  StyleSheet,
  /*
  Colors:
  colorRed: '#ff1738',
  colorTextLight: '#F3FDFE',
  colorTextDark: '#6dc9ee',
  colorBgMedium: '#03203a',
  colorBGDark: '#040001',
  */
  colorRed: 'rgb(255, 23, 56)',
  colorTextLight: 'rgb(243, 253, 254)',
  colorTextDark: 'rgb(109, 201, 238)',
  colorBgMedium: 'rgb(3, 32, 58)',
  colorOverlayGeneral: 'rgba(3, 32, 58, 0.5)',
  colorOverlayMain: 'rgba(3, 32, 58, 0.6)',
  colorOverlayHeader: 'rgba(243, 253, 254, 0.4)',
  colorModal: 'rgba(109, 201, 238, 0.95)',
  colorBGDark: 'rgb(4, 0, 1)',
  colorOverlayModal: 'rgba(4,0,1,0.8)',
  /*
  // fonts
  */
  defaultFontSizeHeading: 0,
  baseFontSize: SCREEN_WIDTH / 18,
  defaultFontFamilyLogo: 'Raleway_700Bold',
  defaultFontFamilyHeading: 'Oswald_700Bold',
  defaultFontFamilyBody: 'Oswald_400Regular',
  defaultFontSizeLogo: SCREEN_WIDTH / 5.5,
  /*
  // lengths
  */
  talkShadowX: 2,
  talkShadowY: 4,
  /*
  // stuff we need in js files
  */
  useCustomFonts,
  backgroundImage: require('../assets/bg.jpg'),
  titleLogoWidth: SCREEN_WIDTH / 2.5,
  titleLogoHeight: 0,
};
globals.titleLogoHeight = globals.titleLogoWidth * 1.0385046593;
globals.defaultFontSizeHeading = globals.baseFontSize * 1.8;

export default globals;
