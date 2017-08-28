function Person(firstname, lastname){

		console.log(this);
		this.firstName = firstname;
	this.lastName = lastname;
	console.log('person object constructed');
}

Person.prototype.getFullName = function () {
		return this.firstName + ' ' + this.lastName;
}

Person.prototype.getName = function(){

	return this.lastName  + ', ' + this.firstName;
}



var jon = new Person("Jon", "Mayers");
console.log(jon);
console.log("full name: " + jon.getFullName());
console.log("full name: " + jon.getName());

var jane = new Person("Jane", "Mayers");
console.log(jane);
console.log("full name: " + jane.getFullName());
console.log("full name: " + jane.getName());
