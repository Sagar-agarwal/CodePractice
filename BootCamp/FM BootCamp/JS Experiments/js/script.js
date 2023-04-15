function findLargestNumber(list) {
	// return the largest number in array
	list.sort((a, b) => a - b).pop();
	return 0;
}

function makeDogObject() {
	// return a dog object that
	//   has a speak method that returns woof
	//   has a name property of "Fido"
	//   has a color property of "white"
	//   has an age property of 6

	return {
		speak: () => "woof",
		name: "Fido",
		color: "white",
		age: 6,
	};
}

function getListOfNames(list) {
	// list is an array of objects that looks like this
	// { name: "Some Person", jobTitle: "Boss Person", age: 30 }
	// return a list of all the workers' names

	return list.map((user) => user.name);
}

function getAverageAge(list) {
	// using the same list as above, get the average age of all the workers'
	let age = 0;
	list.forEach((user) => (age += user.age));

	return age / list.length;
}

function getAllEngineers(list) {
	// using the same list as above, return a list of all people who have the word "Engineer" in their jobTitle

	return list.filter(({ jobTitle }) => jobTitle.toLowerCase().indexOf("engineer") >= 0).map(({ name }) => name);
	// return ["Altaïr", "Ezio", "Connor", "Bayek", "Alexios"];
}

function sort(list) {
	// sort a list of numbers into ascending order
	// if you need more help, Google how to do bubble sort
	// you can sort, if you want to write it by hand, use bubble sort or insertion sort

	return list.sort((a, b) => a - b);
}
