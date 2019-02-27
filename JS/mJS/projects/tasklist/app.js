const form = document.querySelector('form');
const taskInput = document.getElementById('task');

//Clear input value
taskInput.value = '';

form.addEventListener('submit', runEvent);


// Event Listener
function runEvent (e) {
  console.log(`Event type: ${e.type}`);
  console.log(e.target.value);

  // console.log(taskInput.value);
  // e.preventDefault();
};

// Event: KeyDown 
//taskInput.addEventListener('keydown', runEvent);

// Event keyup
//taskInput.addEventListener('keyup', runEvent);

// Event keypress
// taskInput.addEventListener('keypress', runEvent);

// Event focus
// taskInput.addEventListener('focus', runEvent);

// Event Blur
// taskInput.addEventListener('blur', runEvent);

// Event Cut
taskInput.addEventListener('cut', runEvent);
//Event paste
taskInput.addEventListener('paste', runEvent);
// Event Copy
taskInput.addEventListener('copy', runEvent);

// Event input
taskInput.addEventListener('input', runEvent);