(function(global, $){

	
	var Greetr = function(firstName, lastName, language){

		return new Greetr.init(firstName, lastName,language);
	};

	var supportedLangs = ['en', 'es'];

	var greetings = {

		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {

		en: 'Logged in',
		es: 'Inicio sesion'
	};

	Greetr.prototype = {

		fullName: function(){

			return this.firstName + ' ' + this.lastName;
		},


		validate: function(){

			if(supportedLangs.indexOf(this.language) === -1){
				throw "Invalid language: " + this.language;
			}
		},

		// informal greetings
		greeting: function(){

			return greetings[this.language] + ' ' + this.firstName + '!';
		},


		// formal greetings
		formalGreeting: function(){

			return formalGreetings[this.language] + ' ' + this.firstName + ' ' + this.lastName;
		},

		greet: function(formal){

			var msg;

			//if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			}
			else{
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time
			// makes the method chainable

			return this;
		},

		log: function(){

			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		},

		setLang: function(lang){

			this.language = lang;
			this.validate();
			return this;
		},

		HTMLGreeting: function(selector, formal){

			if(!$){
				throw 'Jquery not loaded';
			}

			if (!selector) {
				throw 'Missing JQuery selector';
			}

			var msg;
			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}


			$(selector).html(msg);

			return this;
		},

	};

	Greetr.init = function(firstName,lastName,language){

		var self = this;

		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

		// Initial Language validator
		self.validate();
	};


	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

}(window, $));