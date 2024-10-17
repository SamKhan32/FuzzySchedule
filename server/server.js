function Place(name,centerX, centerY,sideX,sideY) {
    this.name = name;
    this.centerX = centerX;
    this.centerY = centerY;
    this.sideX = sideX;
    this.sideY = sideY;
}
function Location(lat, long, timestamp) {
    this.lat = lat;
    this.long = long;
    this.timestamp = timestamp;
}

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');}).listen(8080); 

