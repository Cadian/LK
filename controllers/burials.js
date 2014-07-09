var mongoose = require('mongoose');
var utils = require('../utils/utils.js');

var DEFAULT_MARK_IMG = '/imgs/placemark.png';

exports.load = function (req, res) {
	var Burial = mongoose.model('Burial');
	Burial.find({}, function (err, docs) {
		res.render('map', {placemarks: JSON.stringify(docs), burialsCount: docs.length});
	});
}

exports.add = function (req, res) {	
	if (req.route.method == 'post') { 
		// IF POST
		var Burial = mongoose.model('Burial');
		var data = req.body;

		// Fill persons list
		data.persons = [];
		if (Object.prototype.toString.call(data.fio) === '[object Array]') {
			for (var i = 0; i < data.fio.length; i++) {
				data.persons.push({
					fio: data.fio[i],
					dbth: data.dbth[i], 
					ddth: data.ddth[i],
	  				descr: data.info[i]
				});
			}
		} else {
			data.persons.push({
				fio: data.fio,
				dbth: data.dbth, 
				ddth: data.ddth,
  				descr: data.info
			});			
		}

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

		// Save data
		var row = new Burial(data);
		row.save();

		console.log('******************************************');
		console.log(req.body);
		res.redirect('/map');				
	} else {
		// IF GET
		return res.render('addburial');
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
