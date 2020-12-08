const socket = io('http://localhost:9000');

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('messageFromServer', dataFromServer => {
  console.log(dataFromServer);
  socket.emit('messageToServer', { data: 'This is from the client' });
});

document.getElementById('message-form').addEventListener('submit', e => {
  e.preventDefault();
  const newMsg = document.querySelector('#user-message').value;

  socket.emit('newMessageToServer', { text: newMsg });
});

socket.on('messageToClients', msg => {
  document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`;
});

// socket.on('pong', latency => {
//   console.log(latency);
//   console.log('pong was sent to the server');
// });
