
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

// Reusable Code
var titleCommandOptions = {
                            describe: 'Title of note',
                            demand: true,
                            alias: 't'
                            };

var bodyCommandOptions = {
                            describe: 'Body of note',
                            demand: 'true',
                            alias: 'b'
                            };


var argument = process.argv[2];
//console.log('process: ', command);

var argv = yargs
            .command('add', 'Add a new note', {
                title: titleCommandOptions,
                body: bodyCommandOptions
            })
            .command('remove', 'Remove note with mentioned title', {
                title: titleCommandOptions
            })
            .command('list', 'Display all existing notes', {})
            .command('read', 'Display note with mentioned title', {
                title: titleCommandOptions
            })
            .help()
            .argv;
// console.log('yargs: ', argv);



// add, list, , read, remove,
switch (argument){
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