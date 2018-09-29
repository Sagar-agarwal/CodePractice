console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

var addResult = notes.add(4, 5);
console.log(addResult);

// var res = notes.addNote();
// console.log(res);


// fs.appendFile('greeting.txt', '\n Hello ${user.username}!, you are ${notes.age}.', (err) => {
//     if (err)
//     console.log('Unable to write to file');
// });