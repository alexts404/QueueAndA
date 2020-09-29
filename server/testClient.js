const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('broadcast queue', (queue) => {
  console.log(queue);
});

setTimeout(() => {
  socket.emit('add session', 1);
  socket.emit('add session', 2);
  console.log('sending add user request');
  socket.emit('add user', 'Gr', (err) => {
    console.log(err);
  });
  // socket.emit('add user', 'Alex', (err) => {
  //   console.log(err);
  // });
  // socket.emit('raise finger');
  setTimeout(() => {
    console.log('let me join');
    socket.emit('join session', 1, () => console.log('something went wrong'));
    //socket.emit('lower finger');
    setTimeout(() => {
      // socket.emit('lower finger');
      setTimeout(() => {
        //socket.emit('lower finger');
        setTimeout(() => {
          socket.emit('raise finger');
          setTimeout(() => {
            socket.close();
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

const otherSocket = io('http://localhost:3000');

otherSocket.on('broadcast queue', (queue) => {
  console.log(queue);
});

setTimeout(() => {
  console.log('sending add user request');
  otherSocket.emit('add user', 'Clex');
  otherSocket.emit('join session', 2);
  otherSocket.emit('raise finger');
  setTimeout(() => {
    otherSocket.close();
    //   }, 3000);
    //   //   setTimeout(() => {
    //   //     console.log('lowering finger');
    //   //     otherSocket.emit('lower finger');
    //   //     socket.emit('lower hand');
    //   //     setTimeout(() => {
    //   //       socket.close();
    //   //       otherSocket.close();
    //   //       console.log('done');
    //   //     }, 10000);
  }, 2000);
}, 3000);

// const thirdSocket = io('http://localhost:3000');

// thirdSocket.close();
