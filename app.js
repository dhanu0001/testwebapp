const http = require('http');

http.createServer(function (req, res) {
  res.write('Welcome to Saks-India'); 
  res.end(); 
}).listen(8080, '0.0.0.0');
