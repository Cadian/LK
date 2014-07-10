var mongoose = require('mongoose');
var utils = require('../utils/utils.js');

var DEFAULT_MARK_IMG = '/imgs/placemark.png';

exports.homePage = function (req, res) {
	var Burial = mongoose.model('Burial');
	Burial.find().populate('persons').exec(function (err, docs) {
		res.render('map', {placemarks: JSON.stringify(docs), burialsCount: docs.length});
	});
}

exports.addBurialPage = function (req, res) {	
	return res.render('addburial');	
}

exports.addBurial = function (req, res) {	
	var Burial = mongoose.model('Burial');
	var Person = mongoose.model('Person');

	var data = req.body;

	// TODO Check a marker
	if (data.markImg == '') {
		data.markImg = DEFAULT_MARK_IMG;
	}

	// Upload an image if present
	if (req.files.image.name) {
		var imgurl = utils.uploadImage(req.files.image); 
		data.imgs = [imgurl.thumb];
	}

	// fill coords
	if (data.coords) {
		var coords = JSON.parse(data.coords);
		data.x = coords[0];
		data.y = coords[1];
	}

	// TODO add user ID
	data.docInfo = {dateModified: new Date()};	

	// Fill persons list
	data.persons = [];
	
	if (Object.prototype.toString.call(data.fio) === '[object Array]') {
		// If there are many persons 
		var persons = [];
		for (var i = 0; i < data.fio.length; i++) {
			var person = {};
			person.fio = data.fio[i];
			person.dbth = data.dbth[i];
			person.ddth = data.dbth[i];
			person.descr = data.info[i];
			// TODO add user ID
			person.docInfo = {dateModified: new Date()};	
			// Add to array
			persons.push(person);		
		}
		// Save an array with persons to DB
		var promise = Person.create(persons);
		promise.then(function () {
			for (var i = 0; i < arguments.length; i++) {							
				data.persons.push(mongoose.Types.ObjectId(arguments[i]._id + ''));
			}
			// TODO callbacks are still callbacks...
			var row = new Burial(data);
			row.save();
			res.redirect('/map');
		}) 
	} else if (data.fio != undefined) {
		// If there is only one person
		var person = {};
		person.fio = data.fio;
		person.dbth = data.dbth;
		person.ddth = data.dbth;
		person.descr = data.info;
		// TODO add user ID
		person.docInfo = {dateModified: new Date()};	
		// Save a person to DB
		var promise = Person.create(person);
		promise.then(function (savedPerson) {
			data.persons.push(savedPerson._id);
			// TODO callbacks are still callbacks...
			var row = new Burial(data);
			row.save();
			res.redirect('/map');
		}) 
	} else {
		var row = new Burial(data);
		row.save();
		res.redirect('/map');
	}
} 

// exports.update

// exports.search

exports.clearAll = function (req, res) {	
	var Burial = mongoose.model('Burial');
	Burial.remove({}, function(err) {
		console.log('All burial data cleared!');
		res.redirect('/map');
	})
}
