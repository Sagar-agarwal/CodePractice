
// Node Modules
const fs = require('fs');

// Third party Modules
const _ = require('lodash');
const yargs = require('yargs'); 
// Project Files
const notes = require('./notes.js');

/*

    >>>    Code down here   <<<

*/

var command = process.argv[2];
//console.log('process: ', command);

var argv = yargs.argv;
// console.log('yargs: ', argv);



// add, list, , read, remove,
switch (command){
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.readNote(argv.title);
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    default:
        console.log('Operation not recognized in sytem'); 
}