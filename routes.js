/**
 * Controllers
 */
var burials = require(__dirname + '/controllers/burials');

/**
 * Expose routes
 */
module.exports = function (app) {
  // burial routes
	app.get('/map', burials.load);
	app.get('/burials/add', burials.add);
	app.get('/burials/clearAll', burials.clearAll);
	app.post('/burials/add', burials.add);	

  // app.param('commentId', comments.load)
  // app.post('/articles/:id/comments', auth.requiresLogin, comments.create)
  // app.get('/articles/:id/comments', auth.requiresLogin, comments.create)
  // app.del('/articles/:id/comments/:commentId', commentAuth, comments.destroy)
}