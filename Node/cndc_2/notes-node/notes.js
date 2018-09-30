console.log('starting notes.js');

//  Node Require
var fs = require('fs');

var addNote = function (title, body){
    var notes = [];
    note = {
        title: title,
        body: body
    };

    try {
        var notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (err) { }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note)
        var notesJSON = JSON.stringify(notes);
        fs.writeFileSync('notes-data.json', notesJSON);
    }
};

var getAll = function (){
    console.log('getting all notes');
};

var readNote = function (title){
    console.log('reading note: ' + title);
};
var removeNote = function (title){
    console.log('Removing note: ' + title);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readNote: readNote,
    removeNote: removeNote

}