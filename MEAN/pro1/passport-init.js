

var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

//temporary data store
var users = {};
module.exports = function(passport){

	//Passport needs to be able to serealize and de-serialize users to support persistent login session
	passport.serializeUser(function(user, done){
		console.log('serealizing user :', user.username);
		return done(null, user.username);
	});

	passport.deserializeUser(function(username, done){
		return done(null, users[username]);
	});

	passport.use('login', new LocalStrategy({
		passReqToCallback : true //allows us to pass back the entire request to callback
		},
	function(req, username, password, done){

		//check if user exists
		if(!users[username]){
			return done('user not found', false);
		}
		//check if password is valid
		if(isValidPassword(!users[username], password)){
			return done('invalid password', false);
		}
		//successfully signed in
		console.log('successfully logged in');
		return done(null, users[username]);
		})
	);

	passport.use('signup', new LocalStrategy({
		passReqToCallback : true //allows us to pass back the entire request to callback
		},
	function(req, username, password, done){

		//check if user already exist
		if(users[username]){
			return done('username already taken', false);
		}else
		//add user to db
		users[username] = {
			username: username,
			password: createHash(password)
		};
		return done(null, users[username]);
		})
	);


	var isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	};


	//generate hash using bCrypt
	var createHash = function(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};
}