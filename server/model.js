'use strict';

const queue = {
  fingerQueue: [],
  handQueue: [],
};
let users = {};
let fingerQueueOpen = false;
const FINGERQUEUEDELAY = 0;

// queue
const enqueue = (userName, queueName) => {
  if (!fingerQueueOpen) {
    queueName = 'handQueue';
    setTimeout(() => (fingerQueueOpen = true), FINGERQUEUEDELAY * 6000);
  }
  if (userName && !queue[queueName].includes(userName)) {
    queue[queueName] = [...queue[queueName], userName];
    return true;
  } else return false;
};

const dequeue = (userName, queueName) => {
  if (userName && queue[queueName].includes(userName)) {
    queue[queueName] = queue[queueName].filter((el) => el !== userName);
    return true;
  } else return false;
};

const getQueue = () => {
  return queue;
};

//users
const addUser = (userName) => {
  if (!users.hasOwnProperty(userName)) {
    return (users[userName] = userName);
  } else return false;
};

const removeUser = (userName) => {
  if (userName) {
    // very simple cleanup
    dequeue(userName, 'handQueue');
    dequeue(userName, 'fingerQueue');
    delete users[userName];
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
