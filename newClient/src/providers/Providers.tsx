import React from 'react';
import { ContentFrame } from '../containers/ContentFrame/ContentFrame';
import { SocketProvider } from './SocketProvider';
import { TalksProvider } from './TalksProvider';
import { UserProvider } from './UserProvider';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <TalksProvider>
      <UserProvider>
        <SocketProvider>
          <ContentFrame />
        </SocketProvider>
      </UserProvider>
    </TalksProvider>
  );
};
