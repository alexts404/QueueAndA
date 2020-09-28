const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('broadcast queue', (queue) => {
  console.log('A: ' + queue);
});

setTimeout(() => {
  console.log('sending add user request');
  socket.emit('add user', 'Alex', (err) => {
    console.log(err);
  });
  // socket.emit('add user', 'Alex', (err) => {
  //   console.log(err);
  // });
  socket.emit('raise finger');
  setTimeout(() => {
    socket.emit('lower finger');
    setTimeout(() => {
      socket.emit('raise finger');
      setTimeout(() => {
        socket.emit('lower finger');
        setTimeout(() => {
          socket.emit('raise finger');
          socket.close();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// const otherSocket = io('http://localhost:3000');

// otherSocket.on('broadcast queue', (queue) => {
//   console.log(queue);
// });

// setTimeout(() => {
//   console.log('sending add user request');
//   otherSocket.emit('add user', 'Blex');
//   otherSocket.emit('raise finger');
//   setTimeout(() => {
//     console.log('lowering finger');
//     otherSocket.emit('lower finger');
//     socket.emit('lower hand');
//     setTimeout(() => {
//       socket.close();
//       otherSocket.close();
//       console.log('done');
//     }, 10000);
//   }, 2000);
// }, 2000);

// const thirdSocket = io('http://localhost:3000');

// thirdSocket.close();
