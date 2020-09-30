import React, { useContext, useState } from 'react';

import { MainFrame } from '../../components/MainFrame/MainFrame';
import { Handraise } from '../../components/Handraise/Handraise';
import { TalkDetails } from '../../components/TalkDetails/TalkDetails';
import { Login } from '../../components/Login/Login';
import { UserContext } from '../../providers/UserProvider';
import { NavigationProp } from '@react-navigation/native';

interface SingleTalkProps {
  route: any;
  navigation: NavigationProp<any>;
}

export const SingleTalk: React.FC<SingleTalkProps> = ({
  route,
  navigation,
}) => {
  const { userName, setUserName } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

  const { talk } = route.params ? route.params : { talk: null };

  const loginDisplay =
    userName === '' || modalVisible ? (
      <Login
        userName={userName}
        setUserName={setUserName}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    ) : null;

  return (
    <>
      {loginDisplay}
      <MainFrame>
        <Handraise talk={talk} setModalVisible={setModalVisible} />
        <TalkDetails talk={talk} />
      </MainFrame>
    </>
  );
};
