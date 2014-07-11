var mongoose = require('mongoose');
var fs = require('fs');

require(__dirname + '/../models/BurialSchema.js');
require('./temp.js');

var Burial = mongoose.model('Burial');
var Temp = mongoose.model('Temp');

var connect = function () {
	var options = { server: { socketOptions: { keepAlive: 1 } } }
	mongoose.connect('mongodb://localhost/lkdb', options);
}
connect();

Temp.find({}, function(err, temps) {
	for (var i = 0; i < temps.length; i++) {
		console.log('Adding references ' + temps[i].persons.length + ' to ' + temps[i].burial);
		burial_id = temps[i].burial;
		Burial.findByIdAndUpdate(burial_id, { $set: { persons: temps[i].persons, docInfo: {dateModified: new Date() } } }, function (err, tank) {
			if (err) {
				console.log(err);					
			}
		});
	}
})