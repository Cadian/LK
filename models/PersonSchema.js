var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var require('./circle.js');

var PersonSchema = new Schema({
	firstname: {type : String, default : '', trim : true},
	middleName: {type : String, default : '', trim : true},
	lastName: {type : String, default : '', trim : true},
	dbth: {type : String},
	ddth: {type : String},
	descr: {type : String}
})
