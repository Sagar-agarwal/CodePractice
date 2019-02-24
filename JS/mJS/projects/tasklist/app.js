// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick (e) {
  let val = e;

  // val = e.target;
  // val = e.target.id;
  // val = e.target.className;
  // val = e.target.classList;

  // e.target.innerText = 'Hello';

  // Event Type
  val = e.type;

  // Time Stamp
  val = e.timeStamp;

  // Coord event relative to window
  val = e.clientY;

  // Coor relative to element itself
  val = e.offsetY;


  console.log(val);
};