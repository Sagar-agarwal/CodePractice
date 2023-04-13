
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

var notesTemplate = (notes) => {
    var msg = '';
    notes.forEach(note => {
       msg +=  "\n----------------\nTitle: " + note.title + "\n" + "body : " + note.body + "\n";
    });

    return msg;
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
    var notes = notesTemplate(fetchNotes());
    return console.log('\n----------------\n All Notes' + notes);
};

var readNote = function (title){
    var notes = fetchNotes();
    var requestedNote = notes.filter((note) => note.title === title);
    if (requestedNote.length === 1){
        var noteMsg = "\nNote found" + notesTemplate(requestedNote);
    }
    
    var msg = requestedNote.length === 1 ? noteMsg : 'Note not found';
    return console.log(msg);
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