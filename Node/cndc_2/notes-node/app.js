console.log('Starting app.js');

// Node Modules
const fs = require('fs');

// Third party Modules
const _ = require('lodash');

// Project Files
const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

// add, list, , read, remove,
switch (command){
    case 'add':
        console.log('adding new note');
        break;
    case 'list':
        console.log('fetching existing notes');
        break;
    case 'read':
        console.log('Reading last note');
        break;
    case 'remove':
        console.log('Removing note');
        break;
    default:
        console.log('Operation not recognized in sytem'); 
}