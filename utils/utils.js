var fs = require('fs');
var gm = require('gm');
var path = require('path')

exports.uploadImage = function (image) {
	var filename = path.basename(image.path);
	fs.readFile(image.path, function (err, data) {			
	  	var newPath = __dirname + "/../static/imgs/fullsize/" + filename;
	  	var thumbPath = __dirname + "/../static/imgs/thumbs/" + filename;
	  	/// write file to uploads/fullsize folder
	  	fs.writeFile(newPath, data, function (err) {
	  		/// write file to uploads/thumbs folder
	  		gm(newPath).thumb(200, 200, thumbPath, 100, function(err, stdout, stderr){
			  if (err) console.log(err);
			});
			// delete temp file
			fs.unlink(image.path, function (err) {
				if (err) console.log(err);
			});				
	  	});
		
	});
	return ({full: "/imgs/fullsize/" + filename, thumb: "/imgs/thumbs/" + filename});
}
