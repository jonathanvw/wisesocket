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


function turnOn11() {
    gpio.write(11, true, function(err) {
	if (err) throw err;
    });
    console.log("now its on");
}
function turnOff11() {
    gpio.write(11, false, function(err) {
	if (err) throw err;
    });
    console.log("now its off");
}

io.sockets.on('connection', function (socket) {
  socket.on('socket1Toggle', function (data) {
    console.log(data.status);
    if(data.status=='OFF'){
	gpio.setup(7, gpio.DIR_OUT, turnOn);
    }else{
	gpio.setup(7, gpio.DIR_OUT, turnOff);
    }
  });
  socket.on('socket2Toggle', function (data) {
    console.log(data.status);
    if(data.status=='OFF'){
	gpio.setup(11, gpio.DIR_OUT, turnOn11);
    }else{
	gpio.setup(11, gpio.DIR_OUT, turnOff11);
    }
  });
});




