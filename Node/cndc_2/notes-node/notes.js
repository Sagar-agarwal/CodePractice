console.log('starting notes.js');

module.exports.age = 28;

module.exports.addNote = function (){
    console.log('addNote');
    return 'add Note';
};

module.exports.add = function (a, b){
    return a + b;
};