//$ npm install socket.io
  //, io = require('socket.io').listen(app)
  //, gpio = require('rpi-gpio')

var http = require('http');
var app = require('express.io')();
var PythonShell = require('python-shell');
app.http().io();
var express = require('express');
var port = 8080;

// Setup the ready route, and emit talk event.
app.io.route('ready', function(req) {
    req.io.emit('talk', {
        message: 'io event from an io route on the server'
    })
})

app.use(express.static('public'));

// Send the client html.
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
})
app.get('/js/main.js', function(req, res) {
    res.sendfile(__dirname + '/public/js/main.js');
})
app.get('/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', function(req, res) {
    res.sendfile(__dirname + '/public/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js');
})
app.get('/js/vendor/jquery-1.11.2.min.js', function(req, res) {
    res.sendfile(__dirname + '/public/js/vendor/jquery-1.11.2.min.js');
})
app.get('/js/vendor/bootstrap.min.js', function(req, res) {
    res.sendfile(__dirname + '/public/js/vendor/bootstrap.min.js');
})
app.get('/css/bootstrap.min.css', function(req, res) {
    res.sendfile(__dirname + '/public/css/bootstrap.min.css');
})
app.get('/css/bootstrap-theme.min.css', function(req, res) {
    res.sendfile(__dirname + '/public/css/bootstrap-theme.min.css');
})
app.get('/css/main.css', function(req, res) {
    res.sendfile(__dirname + '/public/css/main.css');
})
app.get('/css/font-awesome.min.css', function(req, res) {
    res.sendfile(__dirname + '/public/css/font-awesome.min.css');
})
app.get('/css/font-awesome-animation.min.css', function(req, res) {
    res.sendfile(__dirname + '/public/css/font-awesome-animation.min.css');
})
app.get('/img/wisesocket-logo.png', function(req, res) {
    res.sendfile(__dirname + '/public/img/wisesocket-logo.png');
})
app.get('/fonts/fontawesome-webfont.eot?v=4.3.0', function(req, res) {
    res.sendfile(__dirname + '/fonts/fontawesome-webfont.eot?v=4.3.0');
})
app.get('/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0', function(req, res) {
    res.sendfile(__dirname + '/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0');
})
app.get('/fonts/fontawesome-webfont.woff2?v=4.3.0', function(req, res) {
    res.sendfile(__dirname + '/fonts/fontawesome-webfont.woff2?v=4.3.0');
})
app.get('/fonts/fontawesome-webfont.woff?v=4.3.0', function(req, res) {
    res.sendfile(__dirname + '/fonts/fontawesome-webfont.woff?v=4.3.0');
})
app.get('/fonts/fontawesome-webfont.ttf?v=4.3.0', function(req, res) {
    res.sendfile(__dirname + '/fonts/fontawesome-webfont.ttf?v=4.3.0');
})
app.get('/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular', function(req, res) {
    res.sendfile(__dirname + '/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular');
})

app.io.route('socket1Toggle', function(data) {
    console.log(data.data.status);
    if(data.data.status =='ON'){
      PythonShell.run('/ledoff.py', function(err){
        if (err) console.log(err);
        console.log('turned off');
      });
    }else{
      PythonShell.run('/led.py', function(err){
        if (err) console.log(err);
        console.log('turned on');
      });
    }
});


app.io.route('motionToggle', function(data) {
    console.log("motion code behind");
    console.log(data.data.status);
    // turn default state to off
    PythonShell.run('/ledoff.py', function(err){
      //if (err) console.log(err);
      console.log('motion turned off');
    });

    if(data.data.status =='ON'){
      console.log("turning motion on");
      PythonShell.run('/sensor.py', function(err){
        //if (err) console.log(err);
        console.log('motion sensing on');
      });
    }else{
      console.log("turning things off");
      // turn default state to off
      PythonShell.run('/ledoff.py', function(err){
        //if (err) console.log(err);
        console.log('turned things off');
      });
      console.log("END:motion code behind");
    }
});


app.listen(port);

//app.use(express.static(__dirname + '/public'));

console.log("Server is running on port " + port);
