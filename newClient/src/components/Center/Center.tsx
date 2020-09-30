import React from 'react';
import { View } from 'react-native';

import styles from './CenterStyles';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return <View style={styles.center}>{children}</View>;
};
