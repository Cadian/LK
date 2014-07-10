var mongoose = require('mongoose');

exports.add = function (req, res) {	
	var Person = mongoose.model('Person');
	// var data = req.body;
	var data = {firstname: "Ivan1", middleName: "Petrovich1", lastName: "Smirnov1", docInfo: {dateCreated: new Date()}};

	var row = new Person(data);
	row.save();

	res.redirect('/map');
}