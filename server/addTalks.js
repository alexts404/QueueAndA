const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('broadcast queue', (queue) => {
  console.log(queue);
});

for (let i = 0; i < 5; i++) {
  socket.emit('add session', i);
}
setTimeout(() => {
  socket.close();
}, 1000);
