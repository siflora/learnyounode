const http= require('http')
const map= require('through2-map')
const server=http.createServer(function callback(req,res){
  req.method === 'POST';
  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase()
  })).pipe(res)
})
server.listen(Number(process.argv[2]))