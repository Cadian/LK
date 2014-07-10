var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DocInfoSchema = require('./common/DocInfoSchema.js');

var PersonSchema = new Schema({
	firstName: {type : String, default : '', trim : true},
	middleName: {type : String, default : '', trim : true},
	lastName: {type : String, default : '', trim : true},
	dbth: {type : String},
	ddth: {type : String},
	descr: {type : String},
	docInfo: DocInfoSchema
})

PersonSchema.virtual('fio')
	.get(function () {
		return this.lastName + ' ' + this.firstName + ' ' + this.middleName;
	})
	.set(function (setFullNameTo) {
		var split = setFullNameTo.split(' ');
		
		this.set('lastName', split[0]);
		this.set('firstName', split[1]);
		this.set('middleName', split[2]);
	});

mongoose.model('Person', PersonSchema);