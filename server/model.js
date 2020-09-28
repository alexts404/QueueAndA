'use strict';

const queue = {
  fingerQueue: [],
  handQueue: [],
};
let users = {};
// let fingerQueueOpen = false;
// const FINGERQUEUEDELAY = 0;

// queue
const enqueue = (userName, queueName) => {
  // if (!fingerQueueOpen) {
  //   queueName = 'handQueue';
  //   setTimeout(() => (fingerQueueOpen = true), FINGERQUEUEDELAY * 6000);
  // }
  if (userName && !queue[queueName].includes(userName)) {
    queue[queueName] = [...queue[queueName], userName];
    console.log('enqueue: ', userName, queueName);
    return true;
  } else return false;
};

const dequeue = (userName, queueName) => {
  if (userName && queue[queueName].includes(userName)) {
    queue[queueName] = queue[queueName].filter((el) => el !== userName);
    console.log('dequeue: ', userName, queueName);
    return true;
  } else return false;
};

const getQueue = () => {
  return queue;
};

//users
const addUser = (userName, socketId) => {
  if (!users.hasOwnProperty(socketId)) {
    const newUser = (users[socketId] = userName);
    console.log('user added: ', socketId, newUser);
    return newUser;
  } else return false;
};

const removeUser = (socketId) => {
  let userName;
  if ((userName = users[socketId])) {
    // very simple cleanup
    dequeue(userName, 'handQueue');
    dequeue(userName, 'fingerQueue');
    delete users[socketId];
    return true;
  } else return false;
};

module.exports = {
  enqueue,
  dequeue,
  addUser,
  removeUser,
  getQueue,
};
