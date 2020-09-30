import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../../../assets/logo.svg';
import globals from '../../globals';
import { Center } from '../../components/Center/Center';
const { titleLogoWidth } = globals;

import styles from './TitleStyles';

const Title = ({ navigation }: any) => {
  return (
    <Center>
      <TouchableOpacity
        onPress={() => navigation.navigate('Talks')}
        style={styles.touchNavigation}
      >
        <Logo width={titleLogoWidth} height={'170'} style={styles.logo} />
        <Text style={styles.text}>Queue & A</Text>
      </TouchableOpacity>
    </Center>
  );
};

export default Title;
