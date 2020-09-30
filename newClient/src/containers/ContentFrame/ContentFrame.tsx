import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { SwipeNavigation } from '../Navigation/SwipeNavigation';
import { TalksContext } from '../../providers/TalksProvider';
import { Center } from '../../components/Center/Center';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import globals from '../../globals';
import styles from './ContentFrameStyles';

interface ContentFrameProps {}

export const ContentFrame: React.FC<ContentFrameProps> = () => {
  const [loading, setLoading] = useState(true);
  const talks = useContext(TalksContext);
  const [fontsLoaded] = globals.useCustomFonts();
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (talks === null || !fontsLoaded || imageLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [talks, fontsLoaded, imageLoading]);

  const inner = loading ? (
    <View style={styles.loadingView}>
      <Center>
        <ActivityIndicator size="large" color={globals.colorTextLight} />
      </Center>
    </View>
  ) : (
    <NavigationContainer>
      <SwipeNavigation />
    </NavigationContainer>
  );

  return (
    <ImageBackground
      source={globals.backgroundImage}
      style={styles.image}
      onLoadEnd={() => setImageLoading(false)}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.header} />
        {inner}
      </View>
    </ImageBackground>
  );
};
