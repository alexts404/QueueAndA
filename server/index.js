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
    if (!name && typeof reject === 'function') {
      reject(`User ${userName} already exists.\nChoose a different username!`);
    } else {
      socket.userName = name;
    }
  });

  socket.on('raise hand', () => {
    if (enqueue(socket.userName, 'handQueue')) {
      socket.emit('broadcast queue', getQueue());
    }
  });

  socket.on('raise finger', () => {
    if (enqueue(socket.userName, 'fingerQueue')) {
      io.emit('broadcast queue', getQueue());
    }
  });

  socket.on('lower hand', () => {
    if (dequeue(socket.userName, 'handQueue')) {
      io.emit('broadcast queue', getQueue());
    }
  });

  socket.on('lower finger', () => {
    if (dequeue(socket.userName, 'fingerQueue')) {
      io.emit('broadcast queue', getQueue());
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
