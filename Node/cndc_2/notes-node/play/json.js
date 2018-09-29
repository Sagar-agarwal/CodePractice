var fs = require('fs');

var originalNotesObj = {
    title: 'Some title',
    body: 'Some body text'
};


// WRITE Notes
var originalNoteJSON = JSON.stringify(originalNotesObj);
fs.writeFileSync('notes.json', originalNoteJSON);

// READ Notes
var notesJSON = fs.readFileSync('notes.json');
var notesObj = JSON.parse(notesJSON);
console.log(typeof(notesObj));
console.log(notesObj);