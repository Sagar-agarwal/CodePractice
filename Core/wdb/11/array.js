/*
// check uniform
var arr = ['a', 'a', 'a', 'a', 'b'];
var isUniform = true;
var i = 1;
while(i <= (arr.length - 1)){
    if (arr[i] === arr[i-1]) {
        isUniform = true;
    } else {
        isUniform = false;
    }
    i++;
}

if (isUniform) {
    console.log("Array is uniform");
} else {
    console.log("Array is NOT uniform");
}
*/

// -------------------------------------------------------

// Reverse the array
/*
var arr = [1,2,3,4,5,6,7,8,9];
console.log("Original Array: " + arr);
var revArr = [];
arr.forEach(function (arr){
    revArr.unshift(arr);
});
console.log("I reversed it: " + revArr);
*/

// --------------------------------------------------------

// forEach Practive
/*
var num = [1,2,3,4,5,6,7,8,9,10];

num.forEach(function (num){
    if (num % 3 === 0) {
        console.log("num is here: " + num);    
    }
    
});
*/

//-----------------------------------------------------------

// ToDo list example
/*
function toDoApp() {
    
    var action = prompt("what would you like to do");

    if (action.toLowerCase().indexOf("new") > -1) {
        var item = prompt("Enter your new toDo Item");
        todo.push(item);
        console.log(todo);
        toDoApp();
    }

    if (action.toLowerCase().indexOf("list") > -1) {
        console.log(todo);
        toDoApp();
    }

    if (action.toLowerCase().indexOf("quit") > -1) {
        return console.log("your current to do list is: " + todo);

    }

    toDoApp();

}

var todo = [];

toDoApp();
*/


