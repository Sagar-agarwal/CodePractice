console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.uniq(['sagar', 'agarwal', 'sagar']));

// console.log(_.isString(true));

// var addResult = notes.add(4, 5);
// console.log(addResult);

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// fs.appendFile('greeting.txt', '\n Hello ${user.username}!, you are ${notes.age}.', (err) => {
//     if (err)
//     console.log('Unable to write to file');
// });