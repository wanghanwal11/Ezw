var http = require('http');
var fs = require('fs');
var url = require('url');
console.log("启动80迷你服务器...........................")
http.createServer( function (request, response) {
  var pathname = "dist"+url.parse(request.url).pathname;
  console.log("........")
  fs.readFile(pathname, function (err, data) {
    if (err) {
      response.writeHead(404, {'Content-Type': 'text/html'});
    }else{
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data.toString());
    }
    response.end();
  });
}).listen(9000);
