/**
 * Controllers
 */
var burials = require(__dirname + '/controllers/burials');
var persons = require(__dirname + '/controllers/persons');

/**
 * Expose routes
 */
module.exports = function (app) {
  // burial routes
	app.get('/map', burials.homePage);
	app.get('/burials/add', burials.addBurialPage);
	app.get('/burials/clearAll', burials.clearAll);
	app.post('/burials/add', burials.addBurial);	
	app.get('/persons/add', persons.add);	

  // app.param('commentId', comments.load)
  // app.post('/articles/:id/comments', auth.requiresLogin, comments.create)
  // app.get('/articles/:id/comments', auth.requiresLogin, comments.create)
  // app.del('/articles/:id/comments/:commentId', commentAuth, comments.destroy)
}