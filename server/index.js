const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const queue = {
  fingerQueue: [],
  handQueue: [],
};
let users = {};
let fingerQueueOpen = false;
const FINGERQUEUEDELAY = 0;

// helpers

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

// const raiseHand = (userName) => {
//   if (userName && !handQueue.includes(userName)) {
//     handQueue = [...handQueue, userName];
//     return true;
//   } else return false;
// };

// const raiseFinger = (userName) => {
//   if (userName && !fingerQueue.includes(userName)) {
//     fingerQueue = [...fingerQueue, userName];
//     return true;
//   } else return false;
// };

// server

app.use((ctx) => {
  ctx.body = `socket.io server\nConnect with Queue&A app`;
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log(`user ${socket.userName} disconnected`);
    // very simple cleanup
    if (socket.userName) {
      dequeue(socket.userName, 'handQueue');
      dequeue(socket.userName, 'fingerQueue');
      delete users[socket.userName];
    }
  });

  socket.on('add user', (userName, reject) => {
    if (!users.hasOwnProperty(userName)) {
      users[userName] = socket.userName = userName;
    } else {
      if (typeof reject === 'function')
        reject(
          `User ${userName} already exists.\nChoose a different username!`,
        );
    }
  });

  socket.on('raise hand', () => {
    if (enqueue(socket.userName, 'handQueue')) {
      socket.emit('broadcast queue', queue);
    }
  });

  socket.on('raise finger', () => {
    if (enqueue(socket.userName, 'fingerQueue')) {
      io.emit('broadcast queue', queue);
    }
  });

  socket.on('lower hand', () => {
    if (dequeue(socket.userName, 'handQueue')) {
      io.emit('broadcast queue', queue);
    }
  });

  socket.on('lower finger', () => {
    if (dequeue(socket.userName, 'fingerQueue')) {
      io.emit('broadcast queue', queue);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
