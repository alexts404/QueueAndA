import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './ButtonStyles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style: any;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outer}>
      <View style={[styles.button]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
