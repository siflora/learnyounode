const net = require ('net')

function getTime () {
  var date= new Date()
  return date.getFullYear()+'-'+
  (date.getMonth()+1)+'-'+
  date.getDate()+ ' '+
  date.getHours()+':'+
  date.getMinutes()+'\n'
}
const server = net.createServer(function(socket){
  socket.end(getTime())
  }
)
server.listen(Number(process.argv[2]))