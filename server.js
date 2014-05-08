// LAZAR NECROPOLIS RYAZAN
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');

app.use(express.static('static'));
app.use(express.bodyParser({
	uploadDir: __dirname +'/temp'
}));
app.engine('.html', require('jade').__express); 
app.set('views', path.join('views'));
app.set('view engine', 'jade');

// Bootstrap db connection
// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect('mongodb://localhost/lkdb', options);
}
connect();

// Error handler
mongoose.connection.on('error', function (err) {
  console.log(err);
})

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
  connect();
})

// Bootstrap models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

// Bootstrap routes
require(__dirname + '/routes')(app);

app.listen(process.argv[2]);

