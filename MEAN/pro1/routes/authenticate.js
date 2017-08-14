var express = require('express');
var router = express.Router();

module.exports = function(passport){

	//sends successfull login state back to angular
	router.get('/success', function(req, res){
		res.send({state: 'success', user: req.user ? req.user : null});
	});


	router.get('/faliure', function(req, res){
		res.send({state: 'faliure', user: null, message: 'invalid username or password'});
	});

	//log in
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		faliureRedirect: 'auth/faliure'
	}));

	//sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/auth/success',
		faliureRedirect: '/auth/faliure'
	}));

	//log out
	router.get('/signout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	return router;
}