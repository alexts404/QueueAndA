const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const { enqueue, dequeue, addUser, removeUser, getQueue } = require('./model');

app.use((ctx) => {
  ctx.body = `socket.io server\nConnect with Queue&A app`;
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log(`user ${socket.userName} disconnected`);
    removeUser(socket.userName);
  });

  socket.on('add user', (userName, reject) => {
    const name = addUser(userName);
    if (name) {
      socket.userName = name;
    } else {
      handleError(
        reject,
        `User ${userName} already exists.\nChoose a different username!`,
      );
    }
  });

  socket.on('raise hand', (reject) => {
    if (enqueue(socket.userName, 'handQueue')) {
      socket.emit('broadcast queue', getQueue());
    } else {
      handleError(reject);
    }
  });

  socket.on('raise finger', (reject) => {
    if (enqueue(socket.userName, 'fingerQueue')) {
      io.emit('broadcast queue', getQueue());
    } else {
      handleError(reject);
    }
  });

  socket.on('lower hand', (reject) => {
    if (dequeue(socket.userName, 'handQueue')) {
      io.emit('broadcast queue', getQueue());
    } else {
      handleError(reject);
    }
  });

  socket.on('lower finger', (reject) => {
    if (dequeue(socket.userName, 'fingerQueue')) {
      io.emit('broadcast queue', getQueue());
    } else {
      handleError(reject);
    }
  });
});

// error helper
const handleError = (reject, message) => {
  if (typeof reject === 'function') reject(message);
};

server.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
