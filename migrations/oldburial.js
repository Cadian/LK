var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BurialSchema = new Schema({
  title: {type : String, default : '', trim : true},
  descr: {type : String, default : '', trim : true},
  x: {type: Number},
  y: {type: Number},
  block: {type: Number, default: 0},
  line: {type: Number, default: 0},
  place: {type: Number, default: 0},
  subplace: {type : String, default : ''},
  imgs: [{type : String, default : ''}],
  links: [{type : String, default : ''}],
  markImg: {type : String, default : ''},
  featured: {type : String, default : ''},
  persons: [{
		fio: {type : String},
		dbth: {type : String},
		ddth: {type : String},
		descr: {type : String} 
  }],
  createdAt  : {type : Date, default : Date.now}
})

/**
 * Validations
 */
BurialSchema.path('x').required(true, 'X coord must be set');
BurialSchema.path('y').required(true, 'Y coord must be set');

mongoose.model('Burial', BurialSchema);
