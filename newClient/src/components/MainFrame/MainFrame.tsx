import React from 'react';
import { View, Text } from 'react-native';

import styles from './MainFrameStyles';

interface MainFrameProps {}

export const MainFrame: React.FC<MainFrameProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Queue & A</Text>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};
