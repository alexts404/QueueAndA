import React, { useContext } from 'react';
import { Text } from 'react-native';
import styles from './TalksStyles';
import { TalksContext } from '../../providers/TalksProvider';
import { FlatList } from 'react-native-gesture-handler';
import { TalkCard } from '../../components/TalkCard/TalkCard';
import { MainFrame } from '../../components/MainFrame/MainFrame';
import { NavigationProp } from '@react-navigation/native';

const Talks = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const talks = useContext(TalksContext).talks;
  return (
    <MainFrame>
      <Text style={styles.heading}>Upcoming Talks</Text>
      <FlatList
        style={styles.list}
        data={talks}
        keyExtractor={(item) => `c${item.conference.id}/s${item.session.id}`}
        renderItem={({ item }) => (
          <TalkCard talk={item} navigation={navigation} />
        )}
        contentContainerStyle={styles.flatlistContainer}
      />
    </MainFrame>
  );
};

export default Talks;
