import React from 'react';
import { View, Text } from 'react-native';
import { Talk } from '../../interfaces/Talk';

import styles from './TalkDetailsStyles';

interface TalkDetailsProps {
  talk: Talk;
}

export const TalkDetails: React.FC<TalkDetailsProps> = ({ talk }) => {
  // const conference = talk ? talk.conference.name : '';
  const session = talk
    ? `${talk.session.speakers[0]}: ${talk.session.title}`
    : '';
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{conference}</Text> */}
      <Text style={styles.text}>{session}</Text>
    </View>
  );
};
