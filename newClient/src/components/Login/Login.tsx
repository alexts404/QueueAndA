import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../Button/Button';

import styles from './LoginStyles';

interface LoginProps {
  userName: string;
  setUserName: (name: string) => void;
  modalVisible: boolean;
  setModalVisible: (yes: boolean) => void;
  navigation: NavigationProp<any>;
}

export const Login: React.FC<LoginProps> = ({
  userName,
  setUserName,
  setModalVisible,
  navigation,
}) => {
  const goBack = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  const handleSubmit = () => {
    setUserName(newUserName);
    setModalVisible(false);
  };

  const [newUserName, setNewUserName] = useState(userName);
  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modal}>
          <View style={styles.container}>
            <View style={styles.usernameContainer}>
              <Text style={styles.text}>display name</Text>
              <TextInput
                value={newUserName}
                onChangeText={setNewUserName}
                style={styles.input}
                onSubmitEditing={handleSubmit}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button text="go back" onPress={goBack} style={styles.button} />
              <Button text="ok" onPress={handleSubmit} style={styles.button} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
