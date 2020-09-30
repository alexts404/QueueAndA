import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Title from '../../screens/Title/Title';
import Talks from '../../screens/Talks/Talks';
import { SingleTalk } from '../../screens/SingleTalk/SingleTalk';

const Main = createMaterialTopTabNavigator<any>();

interface SwipeNavigationProps {}

export const SwipeNavigation: React.FC<SwipeNavigationProps> = ({}) => {
  return (
    <Main.Navigator
      tabBarOptions={{
        showLabel: false,
        showIcon: false,
        style: { height: 0 },
      }}
      sceneContainerStyle={styles.scenes}
    >
      <Main.Screen name="Title" component={Title} />
      <Main.Screen name="Talks" component={Talks} />
      <Main.Screen name="SingleTalk" component={SingleTalk} />
    </Main.Navigator>
  );
};

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  scenes: {
    backgroundColor: 'transparent',
  },
});
