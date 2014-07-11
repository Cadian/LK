var mongoose = require('mongoose');
var fs = require('fs');

require(__dirname + '/../models/PersonSchema.js');
require('./oldburial.js');
require('./temp.js');

var Person = mongoose.model('Person');
var OldBurial = mongoose.model('Burial');
var Temp = mongoose.model('Temp');


var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect('mongodb://localhost/lkdb', options);
}
connect();

OldBurial.find({}, function(err, oldBurials) {
	if (err) {
		console.log(err);					
	}

	for (var i = 0; i < oldBurials.length; i++) {
		var oldburial = oldBurials[i];
		if (oldburial.persons.length && oldburial.persons.length > 0) {
			var persons = [];
			for (var j = 0; j < oldburial.persons.length; j++) {	
				var person = oldburial.persons[j];
				person._id = mongoose.Types.ObjectId();
				person.docInfo = {dateModified: new Date()};	
				// Add to array
				persons.push(person);	
			}
			console.log(persons)
			// console.log('looking ....... #' + i + '   ' + oldburial.title)

			Person.create(persons, function(err) {
				if (err) {
					console.log(err);					
				}

				var temp = new Temp();
				temp.burial = mongoose.Types.ObjectId(oldburial._id + '');
				temp.persons = [];

				for (var n = 1; n < arguments.length; n++) {							
					temp.persons.push(mongoose.Types.ObjectId(arguments[n]._id + ''));
				}

				temp.save();
			});
		}	
	}	
});





