var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("holloe  git node ecs")
}).listen(3000)

console.log('node server start.....')