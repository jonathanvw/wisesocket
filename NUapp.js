//$ npm install socket.io
  //, io = require('socket.io').listen(app)
  //, gpio = require('rpi-gpio')

var http = require('http')
  , express = require('express');

var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));

/*
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
*/

http.createServer(app).listen(port);
console.log("Server is running on port " + port);
