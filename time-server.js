const net = require('net');
const strftime = require('strftime');

const portNo = process.argv[2];
const server = net.createServer((socket)=> {
  console.log('client connected');
  socket.on('end', () => {
    console.log('client disconnected');
  });
})
server.listen(portNo)