const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const {
  enqueue,
  dequeue,
  addUser,
  removeUser,
  getQueue,
  addToSession,
  addSession,
} = require('./model');

app.use((ctx) => {
  ctx.body = `socket.io server\nConnect with Queue&A app`;
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
    removeUser(socket.id);
    io.emit('broadcast queue', getQueue());
  });

  socket.on('add user', (userName, reject) => {
    const name = addUser(userName, socket.id);
    console.log('add user request');
    if (!name) {
      handleError(
        reject,
        `User ${userName} already exists.\nChoose a different username!`,
      );
    } else {
      socket.userName = name;
    }
  });
  socket.on('add session', (session, reject) => {
    if (addSession(session)) {
      console.log('session', session, 'added');
    } else {
      handleError(reject);
    }
  });

  socket.on('join session', (session, reject) => {
    if (addToSession(socket.id, session)) {
      socket.session = session;
      socket.join(session);
    } else {
      handleError(reject);
    }
  });

  socket.on('raise hand', (reject) => {
    if (enqueue(socket.id, socket.session, 'handQueue')) {
      socket.emit('broadcast queue', getQueue(socket.session));
    } else {
      handleError(reject);
    }
  });

  socket.on('raise finger', (reject) => {
    if (enqueue(socket.id, socket.session, 'fingerQueue')) {
      io.to(socket.session).emit('broadcast queue', getQueue(socket.session));
    } else {
      handleError(reject);
    }
  });

  socket.on('lower hand', (reject) => {
    if (dequeue(socket.id, socket.session, 'handQueue')) {
      io.to(socket.session).emit('broadcast queue', getQueue(socket.session));
    } else {
      handleError(reject);
    }
  });

  socket.on('lower finger', (reject) => {
    if (dequeue(socket.id, socket.session, 'fingerQueue')) {
      io.to(socket.session).emit('broadcast queue', getQueue(socket.session));
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
