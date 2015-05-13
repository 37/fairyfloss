var express = require('express');
var router = express.Router();
var forms = require('forms');
var csurf = require('csurf');
var extend = require('xtend');

//Declare the schema of form:

var EditForm = forms.create({
	data: forms.fields.array({
		required: true
	})
});

/* build application */
function renderForm(req, res, locals) {
	console.log('rendering form.');
	res.render('create', { title: 'Create' });
}


module.exports = router;


	/* GET users listing. */

	router.get('/', function(req, res, next) {
		console.log('Oh activity!');
		EditForm.handle(req, {
			success: function (form) {
				console.log('POST request handled.');
				// The form library calls this success method if the form
				// is being POSTED and does not have errors.

				// The express-stormpath library will populate req.user, 
				// all we have to do is set the properties that we care about 
				// and then call save() on the user object:
				
					var data = form.data.data;
					console.log('yo ho yo ho its a pirates life for me!');

					console.log(data);
					res.redirect('/');
			},
			error: function (form) {
				// The form library calls this method if the form
				// has validation errors.  We will collect the errors
				// and render the form again, showing the errors
				// to the user
				renderForm(req, res, {
					errors: collectFormErrors(form)
				});
			},
			empty: function (){

				// The form library calls this method if the method 
				// is GET - thus we just need to render the form.
				console.log('GET request handled.');
				renderForm(req, res);
			}
		});
	});

	// This is an error handler for this router

	router.use(function (err, req, res, next) {
		// This handler catches errors for this router 
		if (err.code ==='EBADCSRFTOKEN'){
			// The csrf library is telling us that it can't find a 
			// valid token on the form
			if (req.user){
				// session token is invalid or expired.
				// render the form anyway but tell them what happened.
				renderForm(req, res, {
					errors: [{error: 'Your form has expired, please try again.'}]
				});
			} else {
				// The user's cookies have been deleted, we don't know their 
				// intention. Send them back to the home page!
				res.redirect('/');
			}
		} else {
			// Let the parent app handle this error.
			return next(err);
		}
	});

	return router;