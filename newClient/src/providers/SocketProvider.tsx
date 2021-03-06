import React, { createContext, useEffect, useState, useContext } from 'react';
import dotenv from 'dotenv';
import io from 'socket.io-client';
import { UserContext } from './UserProvider';
dotenv.config();
let SOCKETSERVER = process.env.SOCKETSERVER || 'http://localhost:3000';

export const SocketContext = createContext<{
  socket: null | SocketIOClient.Socket;
}>({
  socket: null,
});

interface SocketProviderProps {}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<null | SocketIOClient.Socket>(null);
  const { userName, session } = useContext(UserContext);

  useEffect(() => {
    setSocket(io(SOCKETSERVER));
  }, []);
  useEffect(() => {
    socket?.emit('add user', userName);
  }, [userName, socket]);
  useEffect(() => {
    socket?.emit('join session', session);
  }, [session, socket, userName]);

  // useEffect(() => {
  //   setSocket(io(SOCKETSERVER));
  //   socket?.emit('add user', userName);
  // }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
