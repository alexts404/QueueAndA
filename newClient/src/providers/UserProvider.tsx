import React, { createContext, useState } from 'react';

export const UserContext = createContext<{
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  session: string;
  setSession: React.Dispatch<React.SetStateAction<string>>;
}>({
  userName: '',
  setUserName: () => {},
  session: '',
  setSession: () => {},
});

interface UserProviderProps {}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [session, setSession] = useState('');
  return (
    <UserContext.Provider
      value={{ userName, setUserName, session, setSession }}
    >
      {children}
    </UserContext.Provider>
  );
};
