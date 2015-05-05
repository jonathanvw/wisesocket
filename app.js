//$ npm install socket.io

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , gpio = require('rpi-gpio')

console.log("Webserver Running...");
app.listen(8080);


function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

function turnOn() {
    gpio.write(7, true, function(err) {
	if (err) throw err;
    });
    console.log("now its on");
}
function turnOff() {
    gpio.write(7, false, function(err) {
	if (err) throw err;
    });
    console.log("now its off");
}
function togglePower() {
    
}

io.sockets.on('connection', function (socket) {
  socket.on('button update event', function (data) {
    console.log(data.status);
    if(data.status=='ON'){
	gpio.setup(7, gpio.DIR_OUT, turnOn);
    }else{
	gpio.setup(7, gpio.DIR_OUT, turnOff);
    }
  });
});