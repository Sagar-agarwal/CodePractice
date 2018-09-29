console.log('starting notes.js');

var addNote = function (title, body){
    console.log('adding note: ' + title + ', ' + body);
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