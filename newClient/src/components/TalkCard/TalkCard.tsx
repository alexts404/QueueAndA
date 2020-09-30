import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Talk } from '../../interfaces/Talk';
import { UserContext } from '../../providers/UserProvider';

import styles from './TalkCardStyles';

interface TalkCardProps {
  talk: Talk;
  navigation: any;
}

export const TalkCard: React.FC<TalkCardProps> = ({ talk, navigation }) => {
  const { setSession } = useContext(UserContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setSession(talk.session.id);
        navigation.navigate({
          name: 'SingleTalk',
          params: {
            talk,
          },
        });
      }}
    >
      <View style={styles.card}>
        <Text style={[styles.text, styles.conference]}>
          {talk.conference.name}
        </Text>
        <Text style={[styles.text, styles.session]}>
          {talk.session.speakers[0]}: {talk.session.title}
        </Text>
        <Text style={[styles.text, styles.time]}>{talk.session.slot}</Text>
      </View>
    </TouchableOpacity>
  );
};
