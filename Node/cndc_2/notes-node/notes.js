console.log('starting notes.js');

//  Node Require
var fs = require('fs');

// Internal functions
var fetchNotes = () => {
    try {
     return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (err) {
        return [];
    }
};

var writeNotes = (notes) => {
    var notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes-data.json', notesJSON);
};

// Exposed functions
var addNote = function (title, body){
    var notes = fetchNotes();
    note = {
        title: title,
        body: body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note)
        writeNotes(notes);
        return console.log(JSON.stringify(note));
    }
    else{
        return console.log('Note with same title already exist, try different title');
    }
};

var getAll = function (){
    console.log('getting all notes');
};

var readNote = function (title){
    console.log('reading note: ' + title);
};
var removeNote = function (title){
    var notes = fetchNotes();
    var updatedNotes = notes.filter((note) => note.title !== title);
    writeNotes(updatedNotes);

   var msg = notes.length !== updatedNotes.length ? 'Note removed' : 'Note does not exist';
   return console.log(msg);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readNote: readNote,
    removeNote: removeNote

}