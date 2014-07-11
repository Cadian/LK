var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TempSchema = new Schema({
	burial: {type : mongoose.Schema.Types.ObjectId},
	persons: [{type : mongoose.Schema.Types.ObjectId, ref: 'Person'}]  	
})

mongoose.model('Temp', TempSchema);