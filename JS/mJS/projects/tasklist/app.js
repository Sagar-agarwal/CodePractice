// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventListeners();

function loadEventListeners () {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove Task Event
    taskList.addEventListener('click', removeTask)

    // Clear task Event
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
};

// DOM Load event function
function getTasks (e){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function (task){
        // Create element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-minus-circle"></i>';
    // append to li
    li.appendChild(link);

    // append to ul
    taskList.appendChild(li);
    });
};

// Add task
function addTask (e){
    if (taskInput.value === '') {
        alert('Add Task');
    }

    // Create element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-minus-circle"></i>';
    // append to li
    li.appendChild(link);

    // append to ul
    taskList.appendChild(li);

    // Store in local storage
    storeInLocalStorage(taskInput.value);


    // Clear input
    taskInput.value = '';

    e.preventDefault();
};

function storeInLocalStorage (task) {
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Remove task event function
function removeTask (e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        
        //Remove from Local Storage
        if (localStorage.getItem('tasks') !== null){
            let task = e.target.parentElement.parentElement.textContent;
            let tasks = JSON.parse(localStorage.getItem('tasks'));        
            if (tasks.indexOf(task) !== -1) {
                tasks.splice(tasks.indexOf(task), 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
        

        // Remove from UI
        e.target.parentElement.parentElement.remove();
    }
};

// Clear tasks event functions
function clearTasks (e){

    // Clear tasks from UI
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear tasks from local storage
    localStorage.removeItem('tasks');

}

// Filter tasks event function
function filterTasks (e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function (task){
        
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1){
            
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
};