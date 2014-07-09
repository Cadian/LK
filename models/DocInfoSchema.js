var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocInfoSchema = new Schema({
	_authorId  : {type : Schema.Types.ObjectId},
	_lastEitorId: {type : Schema.Types.ObjectId,
	dateCreated: {type : Date, default : Date.now},
	dateModified: {type : Date, default : Date.now}
})