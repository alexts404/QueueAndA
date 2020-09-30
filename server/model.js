'use strict';

let users = {};
let sessions = {};

// sessions

const addSession = (sessionId) => {
  if (!Object.keys(sessions).includes(sessionId)) {
    sessions = {
      ...sessions,
    };
    sessions[sessionId] = {
      users: {},
      queue: {
        fingerQueue: [],
        handQueue: [],
      },
    };
    console.log('session', sessionId, 'added');
    return sessions[sessionId];
  } else return false;
};

const addToSession = (socketId, sessionId) => {
  const userName = users[socketId];
  const session = sessions[sessionId];
  if (userName && session) {
    session.users = { ...session.users };
    session.users[userName] = true;
    console.log('user', userName, 'added to session', session);
    return true;
  } else return false;
};

// queue
const enqueue = (socketId, sessionId, queueName) => {
  const userName = users[socketId];
  const queue = sessions[sessionId]?.queue;
  if (
    userName &&
    queue &&
    queue[queueName] &&
    !queue[queueName]?.includes(userName)
  ) {
    queue[queueName] = [...queue[queueName], userName];
    console.log('enqueue: ', userName, sessionId, queueName);
    return true;
  } else return false;
};

const dequeue = (socketId, sessionId, queueName) => {
  const userName = users[socketId];
  const queue = sessions[sessionId]?.queue;
  if (
    userName &&
    queue &&
    queue[queueName] &&
    queue[queueName].includes(userName)
  ) {
    queue[queueName] = queue[queueName].filter((el) => el !== userName);
    console.log('dequeue: ', userName, sessionId, queueName);
    return true;
  } else return false;
};

const dequeueNext = (sessionId) => {
  const queue = sessions[sessionId]?.queue;
  if (!queue) return null;
  let nextOneUp;
  if (queue.fingerQueue.length > 0) {
    nextOneUp = queue.fingerQueue[0];
    queue.fingerQueue = queue.fingerQueue.filter((item) => item !== nextOneUp);
  } else if (queue.handQueue.length > 0) {
    nextOneUp = queue.handQueue[0];
    queue.handQueue = queue.handQueue.filter((item) => item !== nextOneUp);
  } else return null;
  return nextOneUp;
};

const getQueue = (sessionId) => {
  return sessions[sessionId]?.queue;
};

//users
const addUser = (userName, socketId) => {
  if (!Object.values(users).includes(userName)) {
    const newUser = (users[socketId] = userName);
    console.log('user added: ', socketId, newUser);
    return newUser;
  } else return false;
};

const removeUser = (socketId) => {
  if (users[socketId]) {
    dequeue(socketId, 'handQueue');
    dequeue(socketId, 'fingerQueue');
    delete users[socketId];
    console.log('user removed: ', socketId);
    return true;
  } else return false;
};

module.exports = {
  enqueue,
  dequeue,
  addUser,
  removeUser,
  getQueue,
  addToSession,
  addSession,
  dequeueNext,
};
