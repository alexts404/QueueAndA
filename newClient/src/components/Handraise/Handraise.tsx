import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Alert } from 'react-native';
import { Talk } from '../../interfaces/Talk';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandPaper, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import globals from '../../globals';
import styles from './HandraiseStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from '../../providers/UserProvider';
import { SocketContext } from '../../providers/SocketProvider';

interface HandraiseProps {
  talk: Talk;
  setModalVisible: (vis: boolean) => void;
}

type Queue = {
  fingerQueue: string[];
  handQueue: string[];
};
let positionStyle = null;

const getPositionIn: (
  queue: Queue,
  user: string,
) => [number, number, number] = (queue, user) => {
  if (queue) {
    const fingerPos = queue.fingerQueue.indexOf(user);
    const handPos = queue.handQueue.indexOf(user);
    const overallPos =
      fingerPos !== -1
        ? fingerPos
        : handPos === -1
        ? -1
        : queue.fingerQueue.length + handPos;
    return [overallPos + 1, fingerPos + 1, handPos + 1];
  } else {
    return [0, 0, 0];
  }
};

export const Handraise: React.FC<HandraiseProps> = ({ setModalVisible }) => {
  const { userName } = useContext(UserContext);
  const { socket } = useContext(SocketContext);
  const [queue, setQueue] = useState<Queue>({ fingerQueue: [], handQueue: [] });

  useEffect(() => {
    socket?.on('broadcast queue', (newQueue: Queue) => {
      setQueue(newQueue);
    });
    socket?.on('broadcast_next', (nextSpeaker: string) => {
      if (nextSpeaker === userName) {
        console.log('fired once');
        Alert.alert("You're up!", 'Get them, Tiger!', [{ text: 'sure thing' }]);
      }
    });
  }, [socket, userName]);

  // // TODO throttle

  const toggleHand = () => {
    if (getPositionIn(queue, userName)[2] !== 0) {
      socket?.emit('lower hand');
    } else {
      socket?.emit('raise hand');
    }
  };

  const toggleFinger = () => {
    if (getPositionIn(queue, userName)[1] !== 0) {
      socket?.emit('lower finger');
    } else {
      socket?.emit('raise finger');
    }
  };

  const queuePosition = getPositionIn(queue, userName)[0];
  if (queuePosition === 1) {
    positionStyle = styles.positionRed;
  } else {
    positionStyle = null;
  }
  const positionText =
    queuePosition === 0 ? (
      <Text style={styles.text}>You're not in line</Text>
    ) : (
      <>
        <Text style={styles.text}>Your're currently </Text>
        <Text style={[styles.text, styles.textPosition, positionStyle]}>
          #{queuePosition}
        </Text>
        <Text style={styles.text}> in line</Text>
      </>
    );
  return (
    <View style={styles.container}>
      <View style={styles.loginInfo}>
        <View style={styles.line}>
          {userName === '' ? (
            <Text style={styles.text}>You're not logged in</Text>
          ) : (
            <>
              <Text style={styles.padding} />
              <Text style={styles.text}>You're logged in as </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={[styles.text, styles.userName]}>{userName}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.positionView}>{positionText}</View>
      </View>
      <TouchableOpacity onPress={() => toggleHand()}>
        <FontAwesomeIcon
          icon={faHandPaper}
          size={globals.defaultFontSizeLogo * 2}
          style={styles.icon}
          color={
            getPositionIn(queue, userName)[2] !== 0
              ? globals.colorRed
              : globals.colorTextLight
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleFinger()}>
        <FontAwesomeIcon
          icon={faHandPointUp}
          size={globals.defaultFontSizeLogo * 2}
          style={styles.icon}
          color={
            getPositionIn(queue, userName)[1] !== 0
              ? globals.colorRed
              : globals.colorTextLight
          }
        />
      </TouchableOpacity>
    </View>
  );
};
