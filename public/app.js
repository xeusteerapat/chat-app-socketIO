const socket = io('http://localhost:9000');
socket.on('messageFromServer', dataFromServer => {
  console.log(dataFromServer);
  socket.emit('messageToServer', { data: 'This is from the client' });
});
